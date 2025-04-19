import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import { generateTAndSetC } from "../lib/utils/makeToken.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body; // Get sign up data

    // Test validity
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const existingEmail = await User.findOne({ email: email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email is taken" });
    }

    const existingUserName = await User.findOne({ username: username });
    if (existingUserName) {
      return res.status(400).json({ error: "Username is taken" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    }

    // Encrypt sensitive data
    const salt = await bcrypt.genSalt(10);
    const hashedPW = await bcrypt.hash(password, salt);

    // Add user
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPW,
    });

    if (newUser) {
      generateTAndSetC(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        userName: newUser.username,
        email: newUser.email,
        websites: newUser.websites,
      });
    } else {
      res
        .status(400)
        .json({ error: "Invalid user data, user wasn't created." });
    }
  } catch (error) {
    console.log(req);
    console.log(
      `User was not created, check the signup controller: ${error.message} `
    );
    res.status(500).json({ error: "Server Error" });
  }
};

export const login = async (req, res) => {
  res.json({
    data: "You're at login",
  });
};

export const logout = async (req, res) => {
  res.json({
    data: "You're at logout",
  });
};
