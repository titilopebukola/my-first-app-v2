import "./Header.css";
import React from "react";
import brandlogo from "../../assets/brandlogo.png";

import { Link } from "react-router-dom";

import Burger from "../Burger/Burger";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="logo-container">
          <img className="logo" src={brandlogo} />
          {/* <h1 className="logo">Ellabuk</h1> */}
          <span className="logo-strapline">Impressively beautiful</span>
        </div>
        <Burger />
        <nav className="header-nav">
          <Link to="/" className="header-nav-link">
            <li className="header-nav-list-item">Home</li>
          </Link>
          <Link to="/about" className="header-nav-link">
            <li className="header-nav-list-item">About </li>
          </Link>
          <Link to="/products" className="header-nav-link">
            <li className="header-nav-list-item">Products</li>
          </Link>
          {/* <Link to="/contact" className="header-nav-link">
            <li className="header-nav-list-item">Contact</li>
          </Link> */}
          {/* <Link to="/basket" className="header-nav-link">
            <li className="header-nav-list-item">Basket</li>
          </Link> */}
          <Link to="/feedback" className="header-nav-link">
            <li className="header-nav-list-item">Feedback</li>
          </Link>
          <div className="shopping-cart">
            <span>
              <Link to="/cart" className="header-nav-link">
                <i class="fa-light fa-cart-plus"></i>
              </Link>
            </span>
            <span>0</span>
          </div>
          {/* <Link to="/productpage" className="header-nav-link">
            <li className="header-nav-list-item">Product Page</li>
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
