import React,{useState} from 'react'
import "../Styles/CartItem.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import { CartItems } from '../helper/CartItems';

function CartItem({cartName , cartPrice ,cartQuantity}) {

 
  const[quantity,setQuantity]=useState(cartQuantity)

  function decrementCount(){
    if(quantity===1){
      Remove()
      return;
    }
    setQuantity(currQuantity => currQuantity-1)
    
  }


  function incrementCount(){
    setQuantity(currQuantity=> currQuantity+1)
  }

  for(let i=0;i<CartItems.length;i++)
    {
      if(CartItems[i].cartName===cartName)
      {
        CartItems[i].cartQuantity=quantity
        break;
      }
    }

  function Remove(){
    let filtered = CartItems.filter((item)=>{
      return item.cartName!==cartName
    });
    CartItems.length=0;
    CartItems.push(...filtered)
    console.log(filtered)
    console.log("CartItems", CartItems)
  }

  return (
    
    <div className='cartitem'>
      <div className='captions'>
        <div className='productname'>
        <h1> {cartName} </h1>
        </div>
        <div className='symbols'>
          <button className='remove' onClick={decrementCount}>
            <RemoveIcon/>
          </button>
          <p> {quantity} </p>
          <button className='add' onClick={incrementCount}>
            <AddIcon/>
          </button>
          <button className='clear' onClick={Remove}>
            <ClearIcon/>
          </button>
          <p> ${quantity*cartPrice} </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem
