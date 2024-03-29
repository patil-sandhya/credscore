import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Components/CSS/Home.module.css";
import { useNavigate } from "react-router-dom";
import { register } from "../Redux/action";
import { useToast, Input, Select } from "@chakra-ui/react";
import Footer from "../Components/Footer";
import styled from "styled-components";


const Register = styled.form`
margin-top: -2px;
  h1{
    font-size: 50px
  }

  .formdiv{
    display: flex;
    flex-direction: column;
align-items: center;
justify-content: center;
  }
  form{
    background-color: #90cdc3;
    border: none;
    width:40%;
    border-radius: 15px;
    margin: 1%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1%;
  }
Input, Select {
  border: none;
  width: 75%;
  margin: 10px;
}

.twoInput{
  display:flex; 
}
`


export function Registerpage() {
  const toast = useToast();
  const dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.reducer.Register;
  });
  const [data, setData] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    dob: "",
    mobile: "",
    gender: "",
    pan: "",
    pan_issue_date: "",
  });

  const handleformsubmit = (e) => {
    e.preventDefault();
    if (
      data.email &&
      data.password &&
      data.first_name &&
      data.last_name &&
      data.dob &&
      data.mobile &&
      data.gender &&
      data.pan &&
      data.pan_issue_date
    ) {
      dispatch(register(data));
      toast({
        title: "Register SuccesFull",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: `Kindely Fill All Details`,
        position: "top",
        isClosable: true,
        duration: 4000,
      });
    }
  };

  return (
    <Register>
    <div style={{ backgroundColor: "#c2fbd7" }}>
      <h1>
        Register Page
      </h1>
      <div className="formdiv">
      <form onSubmit={handleformsubmit}>
      <div className="twoInput">
      <Input
      bg={"white"}
      w={200}
      mb={3}
      type="text"
      placeholder="Firstname"
      onChange={(e) => {
        setData({ ...data, first_name: e.target.value });
      }}
    />
    <br />
    <Input
      bg={"white"}
      w={200}
      mb={3}
      type="text"
      placeholder="Lastname"
      onChange={(e) => {
        setData({ ...data, last_name: e.target.value });
      }}
    />
    </div>
    <br />
        <Input
          bg={"white"}
          w={200}
          mb={3}
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
        />
        <br />
        <Input
          bg={"white"}
          w={200}
          mb={3}
          type="password"
          placeholder="Create password"
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
        />
        <br />
       
        <Input
          bg={"white"}
          w={200}
          mb={3}
          type="text"
          placeholder="Pan Number"
          onChange={(e) => {
            setData({ ...data, pan: e.target.value });
          }}
        />
        <br />
        <div className="twoInput">
        <label htmlFor="">DOB</label>
        <Input
          bg={"white"}
          w={200}
          mb={3}
          className="button"
          type="date"
          placeholder="Lastname"
          onChange={(e) => {
            setData({ ...data, dob: e.target.value });
          }}
        />
        <label htmlFor="">PAN ISSUE</label>
        <Input
          bg={"white"}
          w={200}
          mb={3}
          className="button"
          type="date"
          placeholder="Lastname"
          onChange={(e) => {
            setData({ ...data, pan_issue_date: e.target.value });
          }}
        />
        </div>
        <br />
        <div className="twoInput">
        <Input
          bg={"white"}
          w={300}
          type="number"
          placeholder="Phone number"
          onChange={(e) => {
            setData({ ...data, mobile: e.target.value });
          }}
        />
       

        <Select
          bg={"white"}
          
          
          onChange={(e) => {
            setData({ ...data, gender: e.target.value });
          }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="Other">Other</option>
        </Select>
        </div>
        <br />
        <Input
          bg={"white"}
          className={styles.button}
          w={200}
          mb={3}
          type="submit"
        />
      </form>
      </div>
      <Footer />
    </div>
    </Register>
  );
}
//
