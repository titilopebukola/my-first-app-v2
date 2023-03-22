const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const proposeSchema = new Schema({
  name: String,
  price: String,
  color: String,
  description: String,
  HairType: String,
});

const Propose = mongoose.model("Propose", proposeSchema);

module.exports = Propose;
