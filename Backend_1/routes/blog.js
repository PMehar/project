const express = require('express');

const blogController = require('../controllers/blog');

const router = express.Router();

router.post('/add-blog',blogController.addBlog);

router.get('/get-blogs' , blogController.getBlog );

router.delete('/delete-blog/:id' , blogController.deleteBlog );

module.exports = router;