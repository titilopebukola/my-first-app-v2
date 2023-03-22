import Feedback from "../Feedback/Feedback";

import Products from "../Products/Products";
export default function Recommendation({
  handleHairType,
  hairType,
  products,
  deleteProduct,
  handleAddProduct,
  form,
  handleChange,
}) {
  return (
    <div>
      <Products products={products} deleteProduct={deleteProduct} />

      <div className="wrapper">
        {products.map((product, index) => {
          return (
            <div className="product-wrapper" key={index}>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>Color: {product.color}</p>
              <p>Description: {product.description}</p>
              <p>HairType: {product.hairType}</p>
              <span onClick={() => deleteProduct(product._id, product.name)}>X</span>
            </div>
          );
        })}
      </div>
      <Feedback />
    </div>
  );
}
