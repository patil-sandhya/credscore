import React from 'react';
import styled from 'styled-components';
import Burger from './Nav/Burger';
import logo from '../Images/logo.ico'
import { useSelector } from 'react-redux/es';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #f1f1f1;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #34eb9b;
  
  img{
    padding-top:10px
  }

  h2{
    font-weight: bold;
  }
`

const Navbar2 = () => {
 // const isAuth = useSelector((store)=> store.reducer.isAuth)
  return (
    <Nav>
    
      <div className="logo">
      <a href="/">
        <img src={logo} width="100%" height="100%" />
        
        </a>
       
      </div>
      
      <Burger />
    </Nav>
  )
}

export default Navbar2
