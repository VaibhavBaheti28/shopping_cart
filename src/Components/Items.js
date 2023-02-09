import React,{useState} from 'react'
import "../Styles/Items.css"
import { Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {CartItems} from "../helper/CartItems"

function Items({image, name , price}) {

  const [disable, setDisable] = useState(false);

  const AddToCart = () =>{
    CartItems.push({cartName:name , cartPrice:price ,cartQuantity:1})
    setDisable(true)
    console.log("Added")
    console.log(name);
    console.log(price);
  }
  
  
  return (
    <div className='items'>
      <div className='itemImage' style={{backgroundImage : `url(${image})` }}></div>
      <div className='captions'>
        <div className='productname'>
        <div className='tag'>
          <h1> {name} </h1>
          <p> ${price} </p>
        </div>
        
        </div>
        <div className='symbols'>
          <Button disabled={disable} className='add' onClick={AddToCart} startIcon={<AddShoppingCartIcon fontSize='large'/>}>
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Items
