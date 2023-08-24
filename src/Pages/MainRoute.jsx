
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/Homepage";
  import {Home} from "../Pages/Home";
import {PersonalInfo} from "../Components/CreditReport/PersonalInfo";



import Loginpage from "../Pages/Loginpage";




const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/info" element={<PersonalInfo />}></Route>
     
      

        

      </Routes>
    </div>
  );
};


export default MainRoute;
