import React from "react";
import "./Burger.css";
import { slide as Menu } from "react-burger-menu";

export default function Burger() {
  return (
    <Menu className="my-menu" width={"100vw"} isOpen={false} noOverlay right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/products">
        Products
      </a>
      {/* <a className="menu-item" href="/contact">
        Contact
      </a> */}

      <a className="menu-item" href="/feedback">
        Feedback
      </a>
      <a className="menu-item" href="/cart">
        Cart
      </a>
    </Menu>
  );
}
