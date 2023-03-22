import "./Basket.css";
import React from "react";

import { Helmet } from "react-helmet-async";

export default function Basket() {
  return (
    <>
      <Helmet>
        <title>Ellabuk cart page</title>
        <meta name="description" content="This is the main cart page for the ellabuk site." />
        <link rel="canonical" href="/home" />
      </Helmet>
      <main>
        <div className="about-main-container container">
          <h2>Proceed to payment page.</h2>
        </div>
      </main>
    </>
  );
}
