require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const xlsx = require("xlsx");
const Book = require("./model/Book.js");

const cors = require("cors");
const bookRoutes = require("./routes/books.js");
const adminRoutes = require("./routes/admin.js");

const stripe = require("stripe")(process.env.STRIPE_KEY);

// Multer configuration for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

const port = process.env.PORT;

//midleWare
app.use(bodyParser.json({ limit: "1000mb" }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request payload size: ${JSON.stringify(req.body).length} bytes`);
  next();
});

app.get("/", (req, res) => {
  console.log("Bawa g pindi");
  res.send("app");
});

// Mongo Db Configuration

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const { reset } = require("nodemon");
const uri =
  "mongodb+srv://BookWorld:G6rPcA2aPAlGrwpk@cluster0.9kiwitr.mongodb.net/?retryWrites=true&w=majority&ssl=true";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // create a collection of database

    // const books = client.db("BookWorld").collection("Books");
    const book = client.db("BookWorld").collection("Bookss");

    app.use(bookRoutes);
    app.use(adminRoutes);

    //insert a Book to db
    // app.post("/upload-book", async (req, res) => {
    //   const data = req.body;
    //   // const result = await books.insertOne(data);books.insertMany()
    //   const result = await books.insertMany(data);
    //   res.send(result);
    // });

    //upload many books excel
    // app.post("/upload-books", async (req, res) => {
    //   const data = req.body;
    //   // const result = await books.insertOne(data);books.insertMany()
    //   const result = await book.insertMany(data);
    //   res.send(result);
    // });

    app.post("/upload-book", upload.single("file"), async (req, res) => {
     
    });

    // get all books from db

    app.get("/all-books", async (req, res) => {
      const allBooks = await books.find().toArray();

      res.send(allBooks);
    });

    //Single books

    app.get("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;

        // Validate if the ID is a valid ObjectId
        if (!ObjectId.isValid(id)) {
          return res.status(400).send("Invalid book ID");
        }

        const filter = { _id: new ObjectId(id) };
        const book = await books.findOne(filter);

        if (!book) {
          return res.status(404).send("Book not found");
        }

        res.json(book);
      } catch (error) {
        console.error("Error fetching book:", error);
        res.status(500).send("Error fetching book");
      }
    });
    //update a book

    app.patch("book/:id", async (req, res) => {
      const id = req.params.id;
      const updateBook = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          ...updateBook,
        },
      };
      const result = await books.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    // add a book
    app.patch("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updateBook = req.body;

        const filter = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            ...updateBook,
          },
        };

        const result = await books.updateOne(filter, updateDoc);

        if (result.matchedCount === 0) {
          return res.status(404).send("No book found with that ID.");
        }

        res.send(result);
      } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });

    // delete a book from db

    app.delete("/book/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const result = await books.deleteOne(filter);
        const allBooks = await books.find().toArray();

        if (result.deletedCount === 0) {
          return res.status(404).send("No book found with that ID.");
        }

        res.send(allBooks);
      } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      }
    });

    // get specfic category books

    //   app.get("/book", async (req, res) => {
    //     try {
    //         const categoryQuery = req.query.category;
    //         let query = {};

    //         if (categoryQuery) {
    //             query = { category: categoryQuery }; // Assuming category field holds exact category names
    //         }

    //         const result = await books.find(query).toArray();
    //         res.send(result);
    //     } catch (err) {
    //         console.error(err);
    //         res.status(500).send("Internal Server Error");
    //     }
    // });

    const getBooksByCategory = async (req, res) => {
      try {
        const category = req.query.category; // Get category from query parameter

        // Perform a query to fetch books based on the category
        const books = await client
          .db("BookWorld")
          .collection("Books")
          .find({ category: category })
          .toArray();

        res.json(books); // Send books as a JSON response
      } catch (error) {
        console.error("Error fetching books by category:", error);
        res.status(500).send("Error fetching books by category");
      }
    };

    // Route handler for fetching books by category
    app.get("/book", getBooksByCategory);

    // app.post("/create-checkout-session", async (req, res) => {
    //   const { product } = req.body;

    //   const session = await stripe.checkout.sessions.create({
    //     payment_method_types: ["card"],
    //     line_items: [
    //       {
    //         price_data: {
    //           currency: "usd",
    //           product_data: { name: "product.name", images: ["product.image"] },
    //           unit_amount: 1 * 100, // Convert price to cents
    //         },
    //         quantity: 1,
    //       },
    //     ],
    //     mode: "payment",
    //     success_url: "http://localhost:3000/success",
    //     cancel_url: "http://localhost:3000/cancel",
    //   });

    //   res.json({ id: session.id });
    // });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {});
