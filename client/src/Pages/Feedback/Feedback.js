import React from "react";
// import axios from "axios";
import { Helmet } from "react-helmet-async";

export default function Feedback({
  handleHairType,
  hairType,

  handleAddProduct,
  form,
  handleChange,
}) {
  return (
    <>
      <Helmet>
        <title>Ellabuk product Page</title>
        <meta
          name="description"
          content="This is the main feedback page for lady dresses, summer wear, winter wears, kids collection."
        />
        <link rel="canonical" href="/recommendation" />
      </Helmet>
      <main>
        <section className="filtered-product">
          <div className="filter-wrapper">
            <input onChange={handleHairType} value={hairType} placeholder="Filter by Hair type" />
          </div>
          <br></br>
          <div className="feedback-intro">
            <h2>Thank you for visiting our website today!</h2>
            <br></br>
            <p>We value your feedback, kindly leave a product suggestion to improve your experience on our website</p>
            <br></br>
            <form className="product-form" onSubmit={handleAddProduct}>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
              <input name="price" value={form.price} onChange={handleChange} placeholder="Price" />
              <input name="color" value={form.color} onChange={handleChange} placeholder="Color" />
              <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
              <input name="hairType" value={form.hairType} onChange={handleChange} placeholder="HairType" />

              <button className="submit-btn" type="submit">
                Add Product
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
