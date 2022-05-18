import React, {useState,useEffect} from "react"
import { Route, Routes } from "react-router-dom";
import OrderForm from "./OrderForm";
import Home from "./Home"
import CandyList from './CandyList';
import Navbar from "./Navbar";
import OrderSucess from "./OrderSucess";
import Order from "./Order";
import "../styled_components/App.css"
import Customers from "./Customers";

function App() {
  const [candies,setCandies] = useState ([])
  const [toggleCart,setToggleCart] = useState(false)
  const [toggleHidden,setToggleHidden] = useState("hidden")


useEffect ( ()=>{
fetch("http://localhost:9292/candies")
.then ((res) => res.json())
.then ((data) => setCandies(data))
},[])

function toggleCartOpen  ()  {
  setToggleCart(true);
};

function toggleCartClose () {
  setToggleCart(false)
};

function toggleOrderNavLink (){
  setToggleHidden("display")
}
  

  
  
  
  return (
    <div>
      <Navbar toggleCartOpen={toggleCartOpen} toggleHidden={toggleHidden}/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/candies" element={<CandyList candies={candies} toggleCartClose={toggleCartClose} toggleCart={toggleCart}/>}/>
       <Route path="/checkout" element={<OrderForm toggleOrderNavLink={toggleOrderNavLink}/>}/>
       <Route path='/confirmation' element={<OrderSucess/>}/>
       <Route path='/order' element={<Order/>}/>
       <Route path='/customers' element={<Customers/>}/>
     </Routes>
    </div>  
  );
}

export default App;
