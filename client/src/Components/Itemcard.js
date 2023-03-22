import "../App.css";
import React from "react";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart();
  console.log(props);
  return (
    <div className="featured-product">
      {/* <div className="featured-products"> */}
      <img src={props.img} className="card-img-top img-fluid" />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h5 className="card-title">£ {props.price}</h5>
        <p className="card-text">{props.desc}</p>
        <div className="feature-content">
          <button className="btn-success" onClick={() => addItem(props)}>
            Add to Basket
          </button>{" "}
          <br></br>
          <a href="/productpage" className="view-btn">
            View Item
          </a>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};
export default Itemcard;

{
  /* <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" /> */
}
