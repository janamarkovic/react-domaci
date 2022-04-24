import React from "react";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";

function NavBar({ cartNum })  {
  return (
    <div className="navBar">
      <Link to="/">Porsche shop</Link>
      <Link to="/cart" className="cart-items">
        <ImCart style={{ marginLeft: 10 }} />
        <div className="cart-num">{cartNum}</div>
      </Link>
    </div>
  );
}

export default NavBar;

