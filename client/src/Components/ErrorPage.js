import "../App.css";

const ErrorPage = () => {
  return (
    <section className="error-container">
      <div className="error-message">
        <p>Order canceled -- continue to shop around and checkout when you're ready.</p>{" "}
      </div>
      <div className="error-message">
        <p>Thank you for shopping with us!.</p>
        <button className="btn-continue" type="button">
          Continue Shopping
        </button>
      </div>
    </section>
  );
};
export default ErrorPage;
