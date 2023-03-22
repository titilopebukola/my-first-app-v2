import "./Footer.css";
import React from "react";

import Privacy from "../../Pages/Privacy";
import Terms from "../../Pages/Terms";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container container">
        <a className="menu-item" href="/Privacy">
          Policy
        </a>

        <a className="menu-item" href="/Terms">
          Terms of Use
        </a>
        <a className="menu-item" href="/#">
          Follow Us
        </a>
        <p>&#169; 2023 Ellabuk.com</p>
      </div>
    </footer>
  );
}
