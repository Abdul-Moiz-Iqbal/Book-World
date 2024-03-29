const Book = require("../model/Book");
const xlsx = require("xlsx");
const multer = require("multer");

exports.postBook = (req, res) => {
  const book = new Book({
    title: "book",
    authorName: "author",
    language: "eng",
    publication: 12,
    page: 1,
    isbn: 1,
    binding: "paper",
    // price: 1,
    img_url:
      "https://cdn.exoticindia.com/images/products/thumbnails/t400x300/books-2019/bag459.jpg",
    stock: 1,
    discount: 1,
    discription: "hello world",
  });

  book.save().then((res) => {
    console.log("created");
  });
};

exports.postAllBooks = async (req, res) => {
 

  try {
    // Parse uploaded Excel file
    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    
    // Insert or update books in the database
    const promises = data.map(async (bookData) => {
      // console.log(data)
      const existingBook = await Book.findOne({ isbn: bookData.ISBN });
      if (existingBook) {
        // Update existing book
        await Book.updateOne({ isbn: bookData.ISBN }, bookData);
      } else {
        // Insert new book
        // console.log(bookData);
        const book = new Book({
          title: bookData.Title,
          authorName: bookData["Author Name"],
          language: bookData.Language,
          publication: bookData["Year of Publishing"],
          page: bookData.Pages,
          isbn: bookData.ISBN,
          binding: bookData.Binding,
          price: bookData["Price INR"],
          img_url: bookData.Weight,
          stock: bookData.Stock,
          discount: bookData.Discount,
          discription: bookData["About the Book"],
        });
        book.save();
        // await Book.create(bookData);
      }
    });
    await Promise.all(promises);
    console.log("Books uploaded");
    res.status(200).send("Books uploaded successfully!");
  } catch (error) {
    console.error("Error uploading books:", error);
    res.status(500).send("Error uploading books. Please try again.");
  }
};
