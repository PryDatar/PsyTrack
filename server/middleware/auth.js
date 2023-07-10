const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isDoctor: {
        type: Boolean,
        default: false
    }
    // Vous pouvez ajouter d'autres champs si nécessaire
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
