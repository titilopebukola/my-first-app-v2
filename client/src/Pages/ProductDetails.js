import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [form, setForm] = useState({
    name: "",
    price: "",
    color: "",
    description: "",
    hairType: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    const API = `http://localhost:8080/products?_id=${id}`;
    const res = await axios.get(API);
    setProduct(res.data[0]);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleUpdateProduct(event) {
    event.preventDefault();
    const body = {};
    // go through property item in the object
    for (const prop in form) {
      // if the property is not empty, then add it to our body object
      if (form[prop]) {
        body[prop] = form[prop];
      }
    }
    // so we end up with a body object which is only the fields the user has type in
    const API = `http://localhost:8080/products/${id}`;
    await axios.put(API, body);

    const newProduct = { ...product, ...body };
    setProduct(newProduct);
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p>{product.color}</p>
      <h3>Update details of Product</h3>
      <form onSubmit={handleUpdateProduct}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
        <input name="color" value={form.color} onChange={handleChange} placeholder="color" />
        <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
        <input name="hairType" value={form.hairType} onChange={handleChange} placeholder="HairType" />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
