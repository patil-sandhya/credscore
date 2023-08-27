import { isA } from "@jest/expect-utils"
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux"
export const Privateroute=({children})=>{
const location=useLocation()
    const isAuth=useSelector((store)=>
    store.reducer.isAuth
  )

  return (
    <>
       {isAuth?children:<Navigate to="/login" state={location.pathname} replace={true}/>}
    </>
  )
}