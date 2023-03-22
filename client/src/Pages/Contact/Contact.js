import "./Contact.css";
import React from "react";

import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Ellabuk contact page</title>
        <meta name="description" content="This is the main contact page for the ellabuk site." />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <main>
        <div className="about-main-container container">
          <h2>We Are at Your Service, Kindly leave a message.</h2>
        </div>
      </main>
    </>
  );
}
