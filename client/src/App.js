import "./Reset.css";
// import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import SlideshowGallery from "./Components/SlideshowGallery";
import Success from "./Components/Success";
import ErrorPage from "./Components/ErrorPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import Basket from "./Pages/Basket/Basket";
import Feedback from "./Pages/Feedback/Feedback";
import ProductDetails from "./Pages/ProductDetails";

import ProductPage from "./Pages/ProductPage/ProductPage";
import Recommendation from "./Pages/Recommendation/Recommendation";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "react-use-cart";
import Privacy from "./Pages/Privacy";

function App() {
  const [products, setProducts] = useState([]);
  const [hairType, setHairType] = useState("");
  // const [img, setImage] = useState("");
  const [form, setForm] = useState({
    name: "",
    price: "",
    color: "",
    description: "",
    HairType: ",",
  });

  useEffect(() => {
    getProducts();
  }, [hairType]);

  async function getProducts() {
    let API = "http://localhost:8080/products";

    if (hairType !== "") {
      API = API + "?hairType=" + hairType;
    }
    const res = await axios.get(API);
    console.log(res.data);
    setProducts(res.data);
  }

  function handleHairType(event) {
    setHairType(event.target.value);
  }

  // function handleImg(event) {
  //   setImage(event.target.value);
  // }

  // const handleFilter = async () => {
  //   const response = await fetch(`http://localhost:8080/locations?letter=${letter}`);
  //   const data = await response.json();
  //   setLocations(data);
  // };

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    // console.log(form);
  }

  async function handleAddProduct(event) {
    event.preventDefault();
    const API = "http://localhost:8080/products";
    const res = await axios.post(API, form);

    // add our new book to the page
    const newProductsList = [...products, res.data];
    setProducts(newProductsList);

    // reset the form
    setForm({
      name: "",
      price: "",
      color: "",
      description: "",
      HairType: "",
    });
  }

  async function deleteProduct(id, name) {
    const confirmDelete = window.confirm(`Are you sure you want to permantently delete ${name}?`);
    if (confirmDelete) {
      const API = `http://localhost:8080/products/${id}`;
      const res = await axios.delete(API);
      console.log(res);
      getProducts();
    }
  }

  async function handleAddProduct(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/products", form);
      console.log(response.data);
      alert(
        "TThank you for your valuable feedback/ suggestion, we appreciate you leaving this item suggestion so we can add it"
      );
      setForm({
        name: "",
        price: "",
        color: "",
        description: "",
        hairType: "",
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleHairType={handleHairType}
                  hairType={hairType}
                  products={products}
                  deleteProduct={deleteProduct}
                  handleAddProduct={handleAddProduct}
                  form={form}
                  handleChange={handleChange}
                />
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/Products" element={<Products products={products} deleteProduct={deleteProduct} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Basket" element={<Basket />} />
            <Route path="/Recommendation" element={<Recommendation />} />
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/privacy" element={<Privacy />} />
            {/* <Route path="/slidehowgallery" element={<SlideshowGallery />} /> */}
            <Route path="/Cart" element={<Cart />} />
            <Route path="/CartProvider" element={<CartProvider />} />
            <Route
              path="/feedback"
              element={
                <Feedback
                  handleHairType={handleHairType}
                  hairType={hairType}
                  handleAddProduct={handleAddProduct}
                  handleChange={handleChange}
                  form={form}
                />
              }
            />
            <Route path="/products/:id" element={<ProductDetails />} />
          </Routes>

          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
export default App;
