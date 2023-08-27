import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { register } from "../Redux/action";
export function Registerpage() {
const dispatch=useDispatch()
    
  const user=useSelector((store)=>{
    return store.reducer.Register
  })
    const [data,setData]=useState({email:"",password:"",
  firstname:"",lastname:"",dob:"",phone:"",gender:"",town:"",
  pan:"",pan_issue_date:""
  
  })
   
    
    const handleformsubmit=(e)=>{
        e.preventDefault()
      dispatch(register(data)
      
      )
      
    }
  
  
 
    return (
      <div className="maindivv" style={{}}>
        <h1>Signup</h1>
       <form onSubmit={handleformsubmit} >
        <input type="email" placeholder="Enter email" onChange={(e)=>{setData({...data,email:e.target.value})}} />
        <br />
        <input type="password" placeholder="Create password" onChange={(e)=>{setData({...data,password:e.target.value})}} />
        <br />
        <input type="text" placeholder="Firstname" onChange={(e)=>{setData({...data,firstname:e.target.value})}} />
        <br />
        <input type="text" placeholder="Lastname" onChange={(e)=>{setData({...data,lastname:e.target.value})}} />
        <br />
        <input type="text" placeholder="Pan Number" onChange={(e)=>{setData({...data,pan:e.target.value})}} />
        <br />
        <label htmlFor="">DOB:-</label>
        <input className="button" type="date" placeholder="Lastname" onChange={(e)=>{setData({...data,dob:e.target.value})}} />
        <br />
        <label htmlFor="">PAN ISSUE:-</label>
        <input className="button" type="date" placeholder="Lastname" onChange={(e)=>{setData({...data,pan_issue_date:e.target.value})}} />
        <br />
        <input type="number" placeholder="Phone number" onChange={(e)=>{setData({...data,phone:e.target.value})}} />
        <br />
        <input type="text" placeholder="Town" onChange={(e)=>{setData({...data,town:e.target.value})}} />
        <br />
        
        <select className="button" onChange={(e)=>{setData({...data,gender:e.target.value})}} >
         <option value="male">Male</option>
         <option value="female">Female</option>
         <option value="Other">Other</option>
        </select>
        <br />
        <input className="button" type="submit" />
       </form>
      </div>
    );
  }
  
 