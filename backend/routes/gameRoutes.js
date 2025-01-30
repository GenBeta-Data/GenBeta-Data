const express = require('express');
const { startGame, validateGameLink, saveGame } = require('../controllers/gameController');

const router = express.Router();

router.post('/start', startGame);
router.post('/validate', validateGameLink);
router.post('/save', saveGame);

module.exports = router;