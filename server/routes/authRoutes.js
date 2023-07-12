require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

router.post('/signup', async (req, res) => {
  try {
    const { email, password, isDoctor } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    // Create a new user
    const user = new User({
      email,
      password,
      isDoctor,
    });

    // Save the user
    await user.save();

    // Respond with success
    res.json({ message: 'User created successfully' });
    console.log('User created successfully');
  } catch (error) {
    console.error(`Error occurred during signup: ${error}`);
    res.status(500).json({ message: 'Server error' });
  }
});


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await User.findOne({ email });
    if (!user) {
      console.log(`No user found with email: ${email}`);
      return res.status(400).json({ message: 'Invalid email' });
    }

    // Check the password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create a token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

    // Respond with the token
    res.json({ token, isDoctor: user.isDoctor });
  } catch (error) {
    console.error(`Error occurred during login: ${error}`);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
