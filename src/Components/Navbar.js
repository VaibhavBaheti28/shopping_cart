import React from 'react'
import {Link} from "react-router-dom"
import "../Styles/Navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  
  return (
    <div className="navbar">
        <div className="LeftSide">
           
            <Link to="/"> Home </Link>        
            <Link to="/store"> Store </Link>
            <Link to="/about"> About </Link>
            
        </div>
        
        <div className='RightSide'>
              <Link to="/cart">
                <button>
                  <ShoppingCartIcon/>
                </button>
              </Link>

        </div>
    </div>
  )
}

export default Navbar
