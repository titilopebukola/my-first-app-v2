import React from "react";

import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Ellabuk</title>
        <meta name="description" content="This is the main About page for the ellabuk react site." />
        <link rel="canonical" href="/about" />
      </Helmet>
      <main>
        <div className="about-main-container">
          <div className="about-content">
            <img src=""></img>
            <h2> Privacy Policy</h2>
            <p>
              After placing your order, you can always check the order status of your order anytime on our site. Once
              your order is shipped, we will send you another email along with the link to track your order. Or you can
              track the status of your order from your "order history" section on your account page on the website.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
