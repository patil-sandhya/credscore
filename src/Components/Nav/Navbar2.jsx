import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../Images/logo.ico'

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid #f1f1f1;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #34eb9b;
`

const Navbar2 = () => {
  return (
    <Nav>
      <div className="logo">
        <h1>CredScore</h1>
        <image src={logo} width="20px" height="100%" />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar2
