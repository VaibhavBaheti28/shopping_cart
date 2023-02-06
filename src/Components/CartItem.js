import React from 'react'
import "../Styles/CartItem.css"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function CartItem({Cartname , Cartprice}) {
  return (
    <div className='cartitems'>
      <div className='captions'>
        <div className='productname'>
        <h1> {Cartname} </h1>
        </div>
        <div className='symbols'>
          <button className='remove'>
            <RemoveIcon/>
          </button>
          <p> ${Cartprice} </p>
          <button className='add'>
            <AddIcon/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem
