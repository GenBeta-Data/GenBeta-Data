const mongoose = require('mongoose');

const leaderboardSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userCountry: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Leaderboard', leaderboardSchema);