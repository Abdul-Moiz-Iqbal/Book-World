const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { require: true, type: String },
  authorName: { require: true, type: String },
  language: { require: true, type: String },
  publication: { require: true, type: String },
  page: { require: true, type: String },
  isbn: { require: true, type: String },
  binding: { require: true, type: String },
  price: { require: true, type: Number },
  img_url: { type: String },
  stock: { require: true, type: String },
  discount: { type: Number },
  discription: { type: String },
});

module.exports = mongoose.model("Books", bookSchema);
