import React from 'react'
import Img from "../Assets/Home.jpg"
import "../Styles/About.css"
function About() {
  return (
    <div className="about" style={{ backgroundImage : `URL(${Img})`}}>
      <h1>About</h1>
      <p>
      A shopping cart is an essential part of a retailer’s online store that streamlines the online shopping experience. It’s software that allows website visitors to select, reserve, and purchase a product or service from an eCommerce interface. You can add and remove items as you wish, just like you would in the real world.
        <br></br>
Shopping cart software is a fundamental part of the online shopping experience. It’s what facilitates everything in between the customer finding a product they like and completing their purchase. For that reason, implementing excellent shopping cart software is crucial for your eCommerce business.
      </p>
    </div>
  )
}

export default About
