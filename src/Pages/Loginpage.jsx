import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_SUCCESS } from '../Redux/actionTypes'
export default function Loginpage() {
    const dispatch=useDispatch()
    const user=useSelector((store)=>{
        return store.reducer.Register
      })


  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const toast = useToast()
    const HandleFormRequest=(e)=>{
        e.preventDefault()
   if(user.email==email && user.password==password){
    alert("yes")
    dispatch({type:LOGIN_SUCCESS,payload:"abcd"})
   }else{
    alert("no")
   }
    }
    

    return (
        <div className='maindivv'>
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
