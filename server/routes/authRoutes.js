const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', (req, res) => {
  const { email, password, isDoctor } = req.body;
  const user = new User({ email, password, isDoctor });
  user.save((err) => {
    if (err) return res.status(500).send(err);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).send({ token });
  });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(401).send({ message: 'Email or password is incorrect' });
    user.comparePassword(password, (err, isMatch) => {
      if (err) return res.status(500).send(err);
      if (!isMatch) return res.status(401).send({ message: 'Email or password is incorrect' });
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      res.status(200).send({ token });
    });
  });
});

module.exports = router;
