const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/product");
const Propose = require("./models/propose");

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
  // create a new isntacne of a cat object and add to the DB
  await Product.create({
    name: "Curly-Goddess Hair Extension",

    Price: "£7.50",
    color: "Black",
    description: "Light weight, easy to fix and odorless",
    HairType: "Hair extension",
  });
  console.log("Created a new product");

  mongoose.disconnect();
}

// propose model

async function seed() {
  // create a new isntacne of a cat object and add to the DB
  await Propose.create({
    name: "EZBraids Hair Extension",
    Price: "£15.50",
    color: "#33",
    description: "Light weight and odorless",
    HairType: "Hair extension",
  });
  console.log("Created a new propose");

  mongoose.disconnect();
}

seed();
