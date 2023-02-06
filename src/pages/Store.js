import React from 'react'
import "../Styles/Store.css"
import {ItemList} from "../helper/ItemList"
import Items from "../Components/Items"

function Store() {
  return (
    <div className="store">
      <h1 className="StoreTitle">Store</h1>
      
      <div className="ItemList">

        {ItemList.map((items,key) => {
          return (
            <Items
              key={key}
              image={items.image}
              name={items.name}
              price={items.price}
            />
          );
        })}
      </div>
    </div>
  );
}


export default Store
