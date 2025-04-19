import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "No token" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET); //JWT may need to be imported
    if (!decodedToken) {
      return res.status(401).json({ error: "Bad token" });
    }

    const user = await User.findById(decodedToken.userId).select("-password");
    req.user = user;
    next();
  } catch (error) {
    console.log("ProtectRoute failed");
    return res.status(500).json({ error: "Server Error" });
  }
};
