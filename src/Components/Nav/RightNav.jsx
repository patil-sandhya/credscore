import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LOGOUT_SUCCESS } from '../../Redux/actionTypes';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 0px 20px;
   
  }
 

  @media (max-width: 768px) {
    
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  const dispatch=useDispatch()

const Logout=()=>{
dispatch({type:LOGOUT_SUCCESS})
}

  return (
    <Ul  open={open}>
      <li ><Link to="/home"  style={{textDecoration:"none",fontSize:"large"}}>Home</Link></li>
      <li >  <Link style={{textDecoration:"none",fontSize:"large"}} >Offers</Link></li>
      <li><Link to="/info" style={{textDecoration:"none",fontSize:"large"}} >Credit Report</Link></li>
      <li><Link  style={{textDecoration:"none",fontSize:"large"}} ><button onClick={Logout}>Logout</button></Link></li>

    </Ul>
  )
}

export default RightNav
