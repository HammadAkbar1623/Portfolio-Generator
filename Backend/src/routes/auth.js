import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from '../models/user.model.js'

const router = express.Router();

//  Register a New User
router.post("/register", async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ error: "User already exists." });
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  //  User Login
  router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ error: "Invalid email or password." });
  
      // Check password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ error: "Invalid email or password." });
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  
      res.json({ token, userId: user._id, name: user.name });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  export default router;