require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/product");
const Propose = require("./models/propose");

// stripe payment setup
const stripe = require("stripe")(
  "sk_test_51Mo47IFA6dRsswMu2oeAWSXWaPZ0Ei7a3lGBtRonS7D5GzYJAZb2GD7pO48lyE77Z7BVcRuROwA8sGIZKBN0nGSD00MwBCahBI"
);
const YOUR_DOMAIN = "http://localhost:3000";
// adding a userprofile page
// const fileuploader = require("./express-fileload");
// const user = require("./models/user");
// const userRoutes = require("./routes/userRoutes");

const bp = require("body-parser");
// const { default: Product } = require("../client/src/Pages/Products/Products");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(bp.json()); // allows us access to the request.body

// connect to the databse (pretty important step)
mongoose.connect(process.env.DATABASE_URL);

// READ
app.get("/products", async (request, response) => {
  // { color: "black" }

  // try to do this code, but if it errors, instead of crashing the server, stop, and move to the catch
  try {
    const products = await Product.find(request.query);
    response.status(200).json(products);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

// CREATE
app.post("/products", async (request, response) => {
  try {
    const newProduct = await Product.create(request.body);
    response.status(200).json(newProduct);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// To get a new recommendation
// READ
app.get("/propose", async (request, response) => {
  // try to do this code, but if it errors, instead of crashing the server, stop, and move to the catch
  try {
    const proposes = await Propose.find(request.query);
    response.status(200).json(proposes);
  } catch (error) {
    console.log(error);
    response.status(404).json(error);
  }
});

// creating a new propose
app.post("/propose", async (request, response) => {
  try {
    const newPropose = await Propose.create(request.body);
    response.status(200).json(newPropose);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// DELETE

app.delete("/products/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    response.status(200).send(deletedProduct);
  } catch (error) {
    console.log(error);
    response.json(error);
  }
});

// // update
app.put("/products/:id", async (request, response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(request.params.id, request.body);
    response.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
});

// stripe payment gateway setup

app.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1Mo7r1FA6dRsswMubNRyQcXS",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/error`,
  });

  res.redirect(303, session.url);
});

// // creating a user profile
// // A midlleware which will enable cors with various options like exposerHeader etc
// app.use(cors({ exposeHeader: "id"}));

// // A midlleware which will extract req.body for us
// app.use(express.json());
// // A midlleware which will  extract req.files for us
// app.use(fileuploader());

// // Routes
// app.use("/user", userRoutes);
// mongoose.connect("mongodb://localhost/uploadImage").then(() => {
//   console.log("Connected to MongoDb")
// })
// .catch((err) => {
//   console.log(err.message);
// });
// // define routes where a user can create a new profile ,can access their profile and their given image
// router.get("/image/:id", async (req, res)) => {
//   const { id } = req.params
// }

// added filter location

// const locationSchema = new mongoose.Schema({
//   name: String,
//   lat: Number,
//   lng: Number,
// });

// const Location = mongoose.model("Location", locationSchema);

// app.get("/locations", async (req, res) => {
//   const { letter } = req.query;

//   try {
//     const locations = await Location.find({
//       name: { $regex: new RegExp(`^${letter}`, "i") },
//     }).sort({ name: 1 });

//     res.json(locations);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server error");
//   }
// });

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

/*

  Query
  /cats?location=Leicester

  Params
  /cats/leicester

  Body (in the call on the front end)
  { location: "Leicester" }

*/
