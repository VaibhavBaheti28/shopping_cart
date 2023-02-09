import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Cart from "./pages/Cart"

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/store" exact element={<Store/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path="/cart" exact element={<Cart/>}/>
      </Routes>
    </Router>
    </div>
  );
}
export default App;
