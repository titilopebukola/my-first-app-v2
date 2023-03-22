import animatedgif from "../../assets/animatedgif.gif";
import Item from "../../Components/Item/Item";
import waterwaves from "../../assets/waterwaves.jpg";
import curlywig from "../../assets/curlywig.jpg";
import bobwig from "../../assets/bobwig.jpg";
import jerrycurl from "../../assets/jerrycurl.jpg";
import xpression from "../../assets/xpression.jpg";
import pinkgown from "../../assets/pinkgown.jpg";
import redgown from "../../assets/redgown.jpg";
import xpression1 from "../../assets/xpression1.jpg";
import "./Products.css";

import React from "react";

import { Helmet } from "react-helmet-async";

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Ellabuk product Page</title>
        <meta
          name="description"
          content="This is the main About page for lady dresses, summer wear, winter wears, kids collection."
        />
        <link rel="canonical" href="/products" />
      </Helmet>
      <main>
        <div className="featured-title">
          <h2> All Products</h2>
        </div>
        <div className="featured-products">
          <Item
            name="FreeTress waterwaves hair extension"
            description="Lightweight, fluffy and odorless"
            price={"£7.50"}
            img={waterwaves}
          />
          <Item
            name="Ez braids hair extension"
            description="Straight, Lightweight, and odorless"
            price={"£4.50"}
            img={xpression1}
          />

          <Item name="curly wig " description=" Lightweight and odorless" price={"£50"} img={curlywig} />
          <Item
            name="Jerry Curl Hair expension"
            description="Lightweight and odorless"
            price={"£60.00"}
            img={jerrycurl}
          />

          <Item name="curly wig " description=" Lightweight and odorless" price={"£50"} img={curlywig} />
          <Item
            name="X-pression hair extension"
            description="Straight, Lightweight, and odorless"
            price={"£4.50"}
            img={xpression}
          />
          <Item
            name="Pink party dress"
            description="Straight, Lightweight, and odorless"
            price={"£4.50"}
            img={pinkgown}
          />
          <Item
            name="Kids party dress"
            description="Beautiful ballgown dress for all occassion"
            price={"£25.50"}
            img={redgown}
          />
          <Item name="Bob wig" description="Lightweight and odorless" price={"£60.00"} img={bobwig} />
        </div>
      </main>
    </>
  );
}

// import "../../Pages/Home/Home.css";
// import React from "react";
// import Itemcard from "../../Components/Itemcard";
// import data from "../../Components/data";

// const Products = () => {
//   return (
//     <>
//       <h1 className="featured-product">All Products</h1>
//       <section className="featured-products">
//         {/* <section className="py-4 container"> */}
//         {/* <div className="row justify-content-center"> */}
//         {data.productData.map((item, index) => {
//           return (
//             <div className="item-card">
//               <Itemcard img={item.img} name={item.name} desc={item.desc} price={item.price} key={index} id={item.id} />
//             </div>
//           );
//         })}
//         {/* </div> */}
//         {/* </section> */}
//       </section>
//     </>
//   );
// };
// export default Products;

//

{
  /* <div className="product-wrapper" key={index}>
  <h3>{product.name}</h3>
  <p>Price: {product.price}</p>
  <p>Color: {product.color}</p>
  <p>Description: {product.description}</p>
  <p>HairType: {product.hairType}</p>
  <span onClick={() => deleteProduct(product._id, product.name)}>X</span>
</div>; */
}

{
  /* <div className="wrapper">
{products.map((product, index) => {
  return (
    <section className="featured products">
      <div className="container">
        <h2> Featured Products</h2>
        <img className="product-image" src="./assets/waterwaves.jpg"></img>
        <h3>Butterfly curly braid</h3>
        <p>
          loremLorem ipsum dolor sit amet consectetur <br></br>adipisicing elit. Deserunt, explicabo
          architecto
        </p>
        <span className="price">£10.00</span>
        <div className="feature-content">
          <button className="btn=success" type="button">
            Add to basket
          </button>
        </div>
      </div>
    </section>
  );
})}
</div> */
}
