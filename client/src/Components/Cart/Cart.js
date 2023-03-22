import React from "react";
import { useCart } from "react-use-cart";
import { useEffect, useState } from "react";
// import { CartProvider, useCart } from "react-use-cart";

const Cart = () => {
  const [message, setMessage] = useState("");
  const { isEmpty, totalUniqueItems, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } =
    useCart();
  // if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
    }
  }, []);

  // checkout message
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  return message ? (
    <Message message={message} />
  ) : (
    <section className="cart-container">
      {/* <div className="row justify-content-center">
        <div className="col-12"> */}
      <h5>
        Cart ({totalUniqueItems}) total Items: ({totalItems})
      </h5>
      <table className="quantity">
        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img src={item.img} style={{ width: "200px" }} />
                </td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>Quantity({item.quantity})</td>
                <td>
                  <button className="update-btn" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <button className="update-btn" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                  <button className="remove-item" onClick={() => removeItem(item.id)}>
                    Remove Item
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* </div> */}
      <div className="total-price">
        <h2>Total price: £ {cartTotal}</h2>
      </div>
      <div className="col-auto">
        <button className="clear-btn" onClick={() => emptyCart()}>
          Clear Cart
        </button>
        <form action="http://localhost:8080/checkout" method="POST">
          <button className="checkout-btn" type="submit">
            Checkout
          </button>
        </form>
        {/* <button className="btn btn-primary m-2">Checkout</button> */}
      </div>
      {/* </div> */}
    </section>
  );
};
export default Cart;
