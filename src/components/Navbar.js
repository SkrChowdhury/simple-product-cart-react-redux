import { useDispatch, useSelector } from "react-redux";

import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  const carts = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const handlePageChange = (type) => {
    dispatch({
      type,
    });
  };

  const cartItemNo = carts.reduce(
    (total, product) => total + product.quantity,
    0
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="cart" className="logoImage" />
        </a>

        <div className="flex gap-4">
          <div
            className="navHome"
            id="lws-home"
            onClick={() => handlePageChange("HOME")}
          >
            Home
          </div>
          <div
            className="navCart "
            id="lws-cart"
            onClick={() => handlePageChange("CART")}
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{cartItemNo}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
