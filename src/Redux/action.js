
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_SUCCESS } from "./actionTypes"

export const login=(userData)=>(dispatch)=>{

    
    
}
export const register=(data)=>(dispatch)=>{

    dispatch({type:REGISTER_SUCCESS,payload:data})
   alert("Registration Successfull")
   
    
}