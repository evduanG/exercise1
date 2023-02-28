import React, { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cartItems, renoveItmeById }) => {
  const [isViewCart, setViewCart] = useState(false);

  function cartIsEmptyComp() {
    return <div className="cart-empty"> cart is empty</div>;
  }

  function viewCartBtn() {
    return <button onClick={() => setViewCart(!isViewCart)}>view Cart </button>;
  }

  function mapCartItems() {
    return cartItems.map((elment) => (
      <CartItem
        key={elment.id}
        name={elment.product_name}
        renoveItmeById={renoveItmeById}
        id={elment.id}
        quantity={elment.quantity}
      />
    ));
  }

  function viewCart() {
    if (isViewCart) {
      return (
        <div className="cart">
          {cartItems.length == 0 ? cartIsEmptyComp() : mapCartItems()}
        </div>
      );
    }
  }

  return (
    <div>
      {viewCartBtn()}
      {viewCart()}
    </div>
  );
};

export default Cart;
