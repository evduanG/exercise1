import React, { useState } from 'react';

const MenuButtons = ({addToCartCB})=>{

return (
  <div className='Menu-Buttons'>
    <button onClick={addToCartCB}>add to cart </button>
  </div>
);
}
export default MenuButtons;