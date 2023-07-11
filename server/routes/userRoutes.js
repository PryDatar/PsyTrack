const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/User');
const auth = require('../middleware/auth');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Ici, uploads/ est le dossier où les images seront stockées. Vous pouvez changer cela selon vos besoins.
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Route pour créer/mettre à jour le profil
router.post('/profile', auth, upload.single('avatar'), async (req, res) => {
  try {
    const { name, shortDescription, longDescription, phoneNumber, email, address, isVisibleToPatients } = req.body;
    const avatar = req.file.path; // Le chemin vers le fichier sera dans req.file.path
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.profile = {
      name,
      shortDescription,
      longDescription,
      avatar,
      phoneNumber,
      email,
      address,
      isVisibleToPatients,
    };
    await user.save();

    res.json(user.profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Route pour obtenir le profil
router.get('/profile', auth, async (req, res) => {
  try {
    const userId = req.user._id;
    // Trouver l'utilisateur
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Répondre avec le profil
    res.json(user.profile);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/psychiatrists', async (req, res) => {
  const psychiatrists = await User.find({ 'profile.isVisibleToPatients': true });
  res.json(psychiatrists);
});

module.exports = router;
