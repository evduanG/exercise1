import React, { useState } from "react";

const CartItem = ({ id, renoveItmeById, quantity, name }) => {
  const [count, setCount] = useState(quantity);

  function setCountWreap(i_NewCount) {
    setCount(Math.max(0, i_NewCount));

    if (i_NewCount == 0) {
      renoveItmeById(id);
    }
  }

  return (
    <div className="Menu-Buttons">
      <p>{name}</p>
      <button onClick={() => setCountWreap(count + 1)}>+</button>
      {count}
      <button onClick={() => setCountWreap(count - 1)}>-</button>
    </div>
  );
};
export default CartItem;
