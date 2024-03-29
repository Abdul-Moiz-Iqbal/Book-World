const express = require("express");
const bookController = require("../controller/book.js");
const router = express.Router();

// get books from db
router.get("/all-books", bookController.getAllBooks);

// get single book
// router.get("/book/:id");

// get book by specific category
// router.get("/book")

module.exports = router;
