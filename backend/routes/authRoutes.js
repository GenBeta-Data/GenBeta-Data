const express = require('express');
const { registerUser, loginUser, updateProfile } = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.put('/profile', authenticate, updateProfile);

module.exports = router;