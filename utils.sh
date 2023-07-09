cd server
mkdir controllers models middleware routes
touch server.js package.json .env
touch controllers/authController.js controllers/userController.js controllers/appointmentController.js controllers/medicationController.js controllers/emotionController.js controllers/educationController.js
touch models/User.js models/Appointment.js models/Medication.js models/Emotion.js models/Education.js
touch middleware/auth.js
touch routes/authRoutes.js routes/userRoutes.js routes/appointmentRoutes.js routes/medicationRoutes.js routes/emotionRoutes.js routes/educationRoutes.js