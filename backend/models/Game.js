const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    videoLink: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    logic: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);