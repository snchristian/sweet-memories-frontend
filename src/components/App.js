import React, {useState,useEffect} from "react"
import { Route, Routes } from "react-router-dom";
import OrderForm from "./OrderForm";
import Home from "./Home"

import CandyList from './CandyList';
import Navbar from "./Navbar";

function App() {
  const [candies,setCandies] = useState ([])
  const [toggleCart,setToggleCart] = useState(false)

useEffect ( ()=>{
fetch("http://localhost:9292/candies")
.then ((res) => res.json())
.then ((data) => setCandies(data))
},[])


const toggleCartOpen = () => {
  setToggleCart(true);
};

const toggleCartClose = () => {
  setToggleCart(false)
};
  

  
  
  
  return (
    <div>
      <Navbar toggleCartOpen={toggleCartOpen} />
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/candies" element={<CandyList candies={candies} toggleCartClose={toggleCartClose} toggleCart={toggleCart}/>}/>
       <Route path="/checkout" element={<OrderForm/>}/>
     </Routes>
    </div>  
  );
}

export default App;
