import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 96%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  
  display: flex;
  justify-content: space-between;
  background-color: #34eb9b;

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Cred Score
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
