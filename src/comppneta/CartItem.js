import React, { useState } from 'react';

const CartItem = (props)=>{
  const [count, setCount] = useState(1);

    function setCountWreap(i_NewCount) {
      i_NewCount == 0 ? props.renoveItmeById(props.id) :
        setCount(Math.max(0, i_NewCount))
    }

  return (
    <div className='Menu-Buttons'>
      <p>{props.name}</p>
      <button onClick={() => setCountWreap(count + 1)}>+</button>
      {count}
      <button onClick={() => setCountWreap(count - 1)}>-</button>
    </div>
  );
}
export default CartItem;