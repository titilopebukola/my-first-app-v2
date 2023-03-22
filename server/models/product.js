const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  img: String,
  price: String,
  color: String,
  Quantity: String,
  description: String,
  hairType: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
