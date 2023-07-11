const express = require('express');
const router = express.Router();
const EmotionEntry = require('../models/Emotion');
const auth = require('../middleware/auth');

router.post('/entry', auth, async (req, res) => {
  try {
    const { date, emotion, intensity, note } = req.body;
    const userId = req.user._id;

    console.log(userId);
    const entry = new EmotionEntry({
      emotion,
      intensity,
      note,
      date,
      user : userId,
    });
    await entry.save();
    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/entries', auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const entries = await EmotionEntry.find({ user: userId });

    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
