import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import { generateTAndSetC } from "../lib/utils/makeToken.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body; // Get sign up data

    // Test validity
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(req.body);

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
    console.log(
      `User was not created, check the signup controller: ${error.message} `
    );
    res.status(500).json({ error: "Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isValidPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isValidPassword) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    generateTAndSetC(user._id, res);
    res.status(200).json({
      _id: user._id,
      userName: user.username,
      email: user.email,
      websites: user.websites,
    });
  } catch (error) {
    console.log(`Login failure: ${error.message} `);
    res.status(500).json({ error: "Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out" });
  } catch (error) {
    console.log(`Logout failure: ${error.message} `);
    res.status(500).json({ error: "Server Error" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.log(`getUser failure: ${error.message} `);
    res.status(500).json({ error: "Server Error" });
  }
};
