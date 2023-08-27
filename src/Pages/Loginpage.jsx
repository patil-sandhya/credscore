import React, { useContext, useState } from 'react'

import { useNavigate,useLocation, Navigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_SUCCESS } from '../Redux/actionTypes'
import { login } from '../Redux/action'
export default function Loginpage() {
    const dispatch=useDispatch()
    const user=useSelector((store)=>{
        return store.reducer.Register
      })
    const isAuth=useSelector((store)=>{
        return store.reducer.isAuth
      })

const navigate=useNavigate()
const location=useLocation()
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const toast = useToast()
    const HandleFormRequest=(e)=>{
        e.preventDefault()
   if(user.email==email && user.password==password){
    
    dispatch(login(user)).then(()=>{
        alert("coming")
        navigate(location.state,{replace:true})
    })
   
   }else{
    alert("no")
   }
    }
    

    return (
        <div className='maindivv'>
            {isAuth && <Navigate to="/home" />}
            <form   onSubmit={HandleFormRequest}>
            
                <input
                style={{marginTop:"20px",marginBottom:"10px"}}
                    type = "email"
                    
                    data-testid = "email"
                    placeholder = "abc@gmail.com"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <br />
                <input
                style={{marginBottom:"10px"}}
                    type = "password"
                    
                    placeholder = "12345"
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <br />
                <input className="button" type = "submit" />


            </form>  
                          
        </div>
    )
}
