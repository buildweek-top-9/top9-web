import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import styled from "styled-components"
import { Button, Form, Input } from 'semantic-ui-react';


const StyledHeader = styled.h1`
  color: white;
`
const StyledPage = styled.div`
  text-align: center;
`
const StyledButton = styled.button`
  width: 150px;
  color: white;
  background-color: #7150FF;
  border-radius: 3px;
  height: 30px;
  font-size: 14px;
  font-weight: bold;
`
const StyledInput = styled.input`
  width: 175px;
  height: 25px;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 3px;
`
const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 900;
  color: #A86FEB;
  margin-bottom: 5px;
`

export default function Register(props) {

  const [user, setUser] = useState({name: "", email: "", password: ""});


  const handleChange = event => {
      setUser({ ...user, [event.target.name]: event.target.value });
  };


  const handleSubmit = event => {
      event.preventDefault();
      console.log("handleSubmit")
      axios
        .post('https://my-top-nine-0819.herokuapp.com/auth/register', user)
        .then(res =>{
          console.log(res)
          props.history.push("/login")
        })
        .catch(err => console.error(err))
      
      setUser({
          name: "", email: "", password: ""
      })
  };

  return(
    <>
      <StyledPage>
        <StyledHeader>Welcome to MyTop9!</StyledHeader>
        <Form onSubmit={handleSubmit}>
          <Form.Group style={
            {
              backgroundColor:"white", 
              maxHeight:"500px", 
              width:"400px", 
              margin:"0 auto", 
              padding: "10px 0",
              borderRadius: "15px",
              boxShadow: "0 8px 6px -6px black"
            }
          }>
            <p>To create an account, please fill in the fields below.</p>
            <StyledLabel>Name</StyledLabel>
            <Form.Field
              control={StyledInput}
              type="text"
              name="name"
              placeholder="  First Last"
              value={user.name}
              onChange={handleChange}
              required
            />          
            <StyledLabel>E-mail</StyledLabel>
            <Form.Field
              control={StyledInput}
              type="email"
              name="email"
              placeholder="  abc123@gmail.com"
              value={user.email}
              onChange={handleChange}
              required
            />
            <StyledLabel>Create a Password</StyledLabel>
            <Form.Field
              control={StyledInput}
              type="password"
              name="password"
              placeholder="  password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <StyledButton type="submit">CREATE ACCOUNT</StyledButton> 
            <p>Already a Top9 user? <Link style={{textDecoration:"none", color:"#7150FF", fontWeight:"bold"}} to="/login">LOGIN</Link></p>
          </Form.Group>
        </Form>
      </StyledPage>
    </>
  )
}