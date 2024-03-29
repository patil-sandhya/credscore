
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Components/Homepage";
import {Home} from "../Pages/Home";
import {PersonalInfo} from "../Components/CreditReport/PersonalInfo";
import Loginpage from "../Pages/Loginpage";
import Homepage from "../Components/Homepage";
import { Registerpage } from "./Registerpage";
import { Privateroute } from "./Privateroute";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/home" element={<Privateroute><Home /></Privateroute>}></Route>
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/register" element={<Registerpage/>}></Route>
        <Route path="/info" element={<Privateroute><PersonalInfo /></Privateroute> }></Route>
      </Routes>
    </div>
  );
};


export default MainRoute;
