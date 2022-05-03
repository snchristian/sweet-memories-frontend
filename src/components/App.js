import React, {useState,useEffect} from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./Home"

import CandyList from './CandyList';
import Navbar from "./Navbar";

function App() {
  const [candies,setCandies] = useState ([])

  useEffect ( ()=>{
fetch("http://localhost:9292/candies")
.then ((res) => res.json())
.then ((data) => setCandies(data))
},[])

  
  
  
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/candies" element={<CandyList candies={candies}/>}/>
     </Routes>
    </div>  
  );
}

export default App;
