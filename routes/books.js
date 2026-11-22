
const express = require("express");

const router = express.Router();

// Import Controller Functions
const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
} = require("../controllers/books");

// Routes

// GET all books
router.get("/", getBooks);

// GET single book
router.get("/:id", getBookById);

// POST create book
router.post("/", createBook);

// PUT update book
router.put("/:id", updateBook);

// DELETE book
router.delete("/:id", deleteBook);

module.exports = router;
