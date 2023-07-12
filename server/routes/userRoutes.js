const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const User = require('../models/User');
const PatientSch = require('../models/Patient');

const auth = require('../middleware/auth');
const authPa = require('../middleware/auth');

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


router.get('/psychiatrists', auth, async (req, res) => {
  const psychiatrists = await User.find({ 'profile.isVisibleToPatients': true });
  res.json(psychiatrists);
});

router.get('/getuser', auth, async (req, res) => {
  try {
    const { name } = req.body;

    // Trouver l'utilisateur avec le même nom
    const user = await User.findOne({ 'profile.name': name });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Répondre avec l'utilisateur
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/getUserId', auth, (req, res) => {
  const userId = req.user._id; // Obtenir l'ID de l'utilisateur actuel
  res.json({ userId });
});

router.post('/connect', auth, async (req, res) => {
  const patientId = req.body.userId;
  const psychiatristId = req.body.psyId;
  try {
    const patient = await User.findById(patientId);
    const psychiatrist = await User.findById(psychiatristId);

    if (!patient || !psychiatrist) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Ajouter l'ID du psychiatre à la liste confirmedRelations du patient
    patient.confirmedRelations.addToSet(psychiatristId);

    // Ajouter l'ID du patient à la liste confirmedRelations du psychiatre
    psychiatrist.confirmedRelations.addToSet(patientId);

    // Sauvegarder les modifications
    await patient.save();
    await psychiatrist.save();

    res.json({ message: 'Relations updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/getAllPatients', auth, async (req, res) => {
  const userId = req.user._id;
  console.log(userId);

  try {
    // Trouver l'utilisateur par son ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Récupérer les confirmedRelations de l'utilisateur
    const confirmedRelations = user.confirmedRelations;
    console.log(confirmedRelations)

    const users = await User.find({ _id: { $in: confirmedRelations } });
    console.log(users)

    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
