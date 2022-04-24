import React from "react";
import CartProduct from "./CartProduct";

const Cart = ({ cartProducts }) => {
  return (
    <div className="cart-container">
      <h1>This is your cart</h1>
      {cartProducts.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cart;

