
import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS } from "./actionTypes"

export const login=(userData)=>(dispatch)=>{

    dispatch({type:LOGIN_SUCCESS,payload:"abcd"})
    return true
    
}
export const register=(data)=>(dispatch)=>{

    dispatch({type:REGISTER_SUCCESS,payload:data})
   
   
    
}