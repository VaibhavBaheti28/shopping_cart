import React from 'react'
import CartItem from "../Components/CartItem"
import { CartItems } from '../helper/CartItems'
import "../Styles/Cart.css"

function Cart() {
  console.log(CartItems);

  return (
    <div className='cart'>
      <h1 className='carttitle'>Cart</h1>
      <div className='cartitems'>
        {
          CartItems.map((item)=>
          {
            return(
              <CartItem
                cartName={item.cartName}
                cartPrice={item.cartPrice}
                cartQuantity={item.cartQuantity}
              />
            );
          })}

      </div>
    </div>
  )
}

export default Cart
