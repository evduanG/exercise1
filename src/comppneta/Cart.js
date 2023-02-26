import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({cartItems, renoveItmeById}) =>{

    function cartIsEmptyComp(){
        return <div> cart is empty</div>
    }

    function mapCartItems(){
        return cartItems.map((elment=><CartItem name = {elment.product_name} renoveItmeById={renoveItmeById} id= {elment.id}/>))
    }

    return (cartItems.length == 0) ? cartIsEmptyComp() : mapCartItems() ;
}

export default Cart;