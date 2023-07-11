require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const emotionRoutes = require('./routes/emotionRoutes');
const auth = require('./middleware/auth');

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

// Enable JSON body parsing
app.use(express.json());

// Initialize multer storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});

const upload = multer({storage: storage});

app.use('/uploads', express.static('uploads'));

// Define routes
app.use('/auth', authRoutes);
app.use('/api/user', auth, userRoutes);
app.use('/api/emotion', emotionRoutes);  // Ajoutez ceci

// Define a test route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Could not connect to MongoDB', err));
