const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Enable CORS
app.use(cors());

// Enable JSON body parsing
app.use(express.json());
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Define a test route
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Load the certificate
const path = require('path');
const certFileBuf = fs.readFileSync(path.resolve(__dirname, '../src/certificat.pem'));

mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  tls: true,
  tlsCAFile: certFileBuf
})

  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));
