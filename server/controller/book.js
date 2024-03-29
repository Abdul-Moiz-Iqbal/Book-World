const Book = require("../model/Book");

exports.getAllBooks = async (req, res, next) => {
  try {
    // Await the result of the query and use lean() to return plain JavaScript objects instead of Mongoose documents
    Book.find()
    .then((books) => {
      res.send(books);
    });
    // const allBooks = await Book.find().lean();
    // res.send(allBooks);
  } catch (error) {
    // Handle any errors that occur during the database query
    console.error("Error fetching all books:", error);
    res.status(500).send("Internal Server Error");
  }
};
