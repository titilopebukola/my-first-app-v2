import "./Header.css";
import React from "react";
import brandlogo from "../../assets/brandlogo.png";
import shoppingbag from "../../assets/shoppingbag.png";
import searchicon from "../../assets/searchicon.png";

import { Link } from "react-router-dom";

import Burger from "../Burger/Burger";

export default function Header() {
  return (
    <header className="header">
      <section className="promo">
        <h5>30% off first order</h5>
      </section>
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

          {/* <Link to="/basket" className="header-nav-link">
            <li className="header-nav-list-item">Basket</li>
          </Link> */}
          <Link to="/feedback" className="header-nav-link">
            <li className="header-nav-list-item">Feedback</li>
          </Link>
          {/* <Link to="/cart" className="header-nav-link">
            <li className="header-nav-list-item">Cart</li>
          </Link> */}

          <div className="shopping-cart">
            <Link to="/cart" className="header-nav-link">
              <img src={shoppingbag} />
            </Link>
          </div>
          <div className="search-icon">
            <Link to="/search" className="header-nav-link">
              <img src={searchicon} />
            </Link>
          </div>

          {/* <Link to="/productpage" className="header-nav-link">
            <li className="header-nav-list-item">Product Page</li>
          </Link> */}
        </nav>
      </div>
    </header>
  );
}
