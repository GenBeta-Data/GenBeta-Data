const express = require('express');
const { getLeaderboard, submitScore } = require('../controllers/leaderboardController');
const router = express.Router();

// Route to get the leaderboard
router.get('/', getLeaderboard);

// Route to submit a score
router.post('/submit', submitScore);

module.exports = router;