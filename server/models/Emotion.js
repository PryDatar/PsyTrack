const mongoose = require('mongoose');

const EmotionEntrySchema = new mongoose.Schema({
  emotion: {
    type: String,
    required: true,
  },
  intensity: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
  },
  date: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('EmotionEntry', EmotionEntrySchema);
