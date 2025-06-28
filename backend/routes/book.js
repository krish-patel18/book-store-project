const router = require("express").Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const Book = require("../models/book");
const { authenticateToken } = require("./userAuth");

// Add book -- admin only
router.post("/add-book", authenticateToken, async (req, res) => {
  try {
    // await Book.insertMany(arrayOfBooks); // arrayOfBooks = the array above
    const { id } = req.headers;
    const user = await User.findById(id);

    if (!user || user.role !== "admin") {
      return res.status(403).json({
        message:
          "You do not have permission to perform any administrative tasks.",
      });
    }

    const book = new Book({
      url: req.body.url,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      desc: req.body.desc,
      language: req.body.language,
    });

    await book.save();

    res.status(200).json({ message: "Book added successfully" });
  } catch (error) {
    console.error("Add Book Error:", error.message); // helpful for debugging
    res.status(500).json({ message: "Internal server error" });
  }
});

//update book
router.put("/update-book", authenticateToken, async (req, res) => {
  try {
    const { bookid } = req.headers;

    await Book.findByIdAndUpdate(bookid, {
      url: req.body.url,
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      desc: req.body.desc,
      language: req.body.language,
    });

    return res.status(200).json({
      message: "Book Updated successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

//delete book
router.delete("/delete-book", authenticateToken, async (req, res) => {
  try {
    const { bookid } = req.headers;
    await Book.findByIdAndDelete(bookid);
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

// Get all books
router.get("/get-all-books", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    return res.json({
      status: "Success",
      data: books,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

// Get recently added books - Limit: 4
router.get("/get-recent-books", async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 }).limit(4);
    return res.json({
      status: "Success",
      data: books,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});

// Get book by ID
router.get("/get-book-by-id/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.json({
      status: "Success",
      data: book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "An error occurred" });
  }
});




module.exports = router;
