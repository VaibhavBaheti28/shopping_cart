import React from 'react'
import CartItem from '../Components/CartItem'
import { useState, useEffect } from 'react';

function AddToCart({name, price}) {
  
  const [cart,setCart]=useState([]);
  
  useEffect(()=>
  {
    setCart(CartItem);
  },[cart]);
}

export default AddToCart
