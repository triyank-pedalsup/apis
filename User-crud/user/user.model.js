const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;