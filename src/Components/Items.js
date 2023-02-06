import React from 'react'
import "../Styles/Items.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useState} from "react"
import {CartItems} from "../helper/CartItems"

function Items({image, name , price}) {

  const [cart,setCart]=useState([]);

  const AddToCart = () =>{
    setCart({...cart, Cartname:{name}, Cartprice:{price}});
    console.log("Added")
    console.log(name);
    console.log(price);
  }

  CartItems.push(cart);
  console.log(CartItems);
  return (
    <div className='items'>
      <div className='itemImage' style={{backgroundImage : `URL(${image})` }}></div>
      <div className='captions'>
        <div className='productname'>
        <h1> {name} </h1>
        </div>
        <div className='symbols'>
          <button className='remove'>
            <RemoveIcon/>
          </button>
          <p> ${price} </p>
          <button className='add' alert onClick={AddToCart}>
            <AddIcon/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Items
