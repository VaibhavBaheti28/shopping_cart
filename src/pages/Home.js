import React from 'react'
import "../Styles/Home.css"
import Img from "../Assets/Home.jpg"

function Home() {
  return (
    <div className='home' style={{ backgroundImage : `URL(${Img})`}}>
      <h1>Welcome to The Cart Tutorial</h1>
    </div>
  )
}

export default Home
