// import "../../Pages/Product/Product.css";
// import "../../App.css";

import React from "react";
import Itemcard from "../../Components/Itemcard";
import data from "../../Components/data";

const Home = () => {
  return (
    <>
      <section className="banner-area">
        <div className="banner-img"></div>
        {/* <img className="product-image" src={animatedgif}></img> */}

        <h1>Affordable hair extension</h1>

        <a href="/products" className="banner-btn">
          SHOP NOW
        </a>
      </section>
      <h1 className="featured-title">Featured Products</h1>
      {/* <section className="featured-products"> */}
      <section className="featured-products">
        {data.productData.map((item, index) => {
          return (
            <Itemcard img={item.img} name={item.name} desc={item.desc} price={item.price} key={index} id={item.id} />
          );
        })}
      </section>
      {/* </section> */}
    </>
  );
};
export default Home;
