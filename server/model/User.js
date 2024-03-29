import mongoose from "mongoose";

const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchma = new Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: Number, require: true },
  cart: {
    items: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "book", require: true },
        quantity: { require: true, type: Number },
      },
    ],
  },
});

module.exports = mongoose.model('User',userSchma)