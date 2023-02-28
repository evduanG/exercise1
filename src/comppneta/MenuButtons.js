import React, { useState } from "react";
import CartItem from "./CartItem";
import "./MenuButtons.css";

const MenuButtons = ({
  addToCartCB,
  quantity,
  id,
  renoveItmeById,
  name,
}) => {
  function is0Quantity() {
    return quantity === 0;
  }

  return is0Quantity() ? (
    <div className="Menu-Buttons">
      <button onClick={addToCartCB}>add to cart </button>
    </div>
  ) : (
    <CartItem
      id={id}
      renoveItmeById={renoveItmeById}
      quantity={quantity}
      name={name}
    />
  );
};
export default MenuButtons;
