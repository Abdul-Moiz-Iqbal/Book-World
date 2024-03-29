const express  = require('express')
const Book = require('../model/Book')

const adminController = require('../controller/admin')

const multer = require('multer')

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.post('/upload-book',  adminController.postBook)

router.post('/upload-books',upload.single('file'),adminController.postAllBooks)

module.exports = router

