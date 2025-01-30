const express = require('express');
const { createBlog, getAllBlogs, getBlogById, commentOnBlog } = require('../controllers/blogController');

const router = express.Router();

router.post('/', createBlog);
router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/:id/comment', commentOnBlog);

module.exports = router;