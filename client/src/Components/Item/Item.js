// import "./Products.css";
// import Products from "./Pages/Products/Products";
// import waterwaves from "../../assets/waterwaves.jpg";

const Item = ({ name, description, img, price }) => {
  return (
    <div className="container">
      <img className="product-image" src={img}></img>
      <h3 className="name">{name}</h3>
      <p className="description">
        {description} <br></br>
      </p>
      <span className="price">{price}</span>
      <div className="feature-content">
        <a href="/productpage" className="banner-btn">
          View Item
        </a>
      </div>
    </div>
  );
};
export default Item;
