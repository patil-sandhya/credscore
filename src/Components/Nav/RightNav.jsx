import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LOGOUT_SUCCESS } from "../../Redux/actionTypes";
import styles from "../CSS/Home.module.css";
import { useSelector } from "react-redux/es";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 7px 20px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
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
  const isAuth = useSelector((store) => store.reducer.isAuth);
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch({ type: LOGOUT_SUCCESS });
  };

  return (
    <Ul open={open}>
    <li>
    <button className={styles.button}>
      <Link 
      to="/"
      style={{ textDecoration: "none", fontSize: "large" }}>
        Home
      </Link>
    </button>
  </li>
     
          <li>
            <button className={styles.button}>
              <Link
                to="/home"
                style={{ textDecoration: "none", fontSize: "large" }}
              >
                CIBIL SCORE
              </Link>
            </button>
          </li>
         
          <li>
            <button className={styles.button}>
              <Link
                to="/info"
                style={{ textDecoration: "none", fontSize: "large" }}
              >
                Credit Care Suit
              </Link>
            </button>
          </li>
         
          <li>
          <button className={styles.button}>
            <Link
              to="/register"
              style={{ textDecoration: "none", fontSize: "large" }}
            >
             Register
            </Link>
          </button>
        </li>
        <li>
        {
          isAuth ?  <button className={styles.button}>
          <Link style={{ textDecoration: "none", fontSize: "large" }}>
            <button onClick={Logout}>Logout</button>
          </Link>
        </button> : <button className={styles.button}>
          <Link 
          to="/login"
          style={{ textDecoration: "none", fontSize: "large" }}>
            <button>Login</button>
          </Link>
        </button> 
        }
          
        </li>
        
      
    </Ul>
  );
};

export default RightNav;
