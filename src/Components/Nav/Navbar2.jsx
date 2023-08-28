import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from "./logo.png"
const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  background-color: #34eb9b;

  .logo {
    padding: 15px 0;
  }
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
