import React, { useState } from "react";
import { Button, Form, Input } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components"

const StyledPage = styled.div`
  text-align: center;
`

const StyledHeader = styled.h1`
  color: white;
`
const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 900;
  color: #A86FEB;
  margin-bottom: 5px;
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

const StyledSignIn = styled.h2`
color: #7150FF;
`

export default function Login(props) {

  const [user, setUser] = useState({email: "", password: ""});


  const handleChange = event => {
      setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
      event.preventDefault();
      
      axios
      .post('https://salty-stream-78442.herokuapp.com/auth/login', user)
      .then(res => {
        console.log(res)
        props.history.push("/dashboard")
      })
      .catch(err => {
        console.error(err)
        alert("E-mail address does not exist / password incorrect")
      })
      
      setUser({
          email: "", password: ""
      })
  };

  return(
    <StyledPage>
      <StyledHeader>Welcome back to MyTop9!</StyledHeader>      
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
          <StyledSignIn>Sign In</StyledSignIn>
          <StyledLabel>Email</StyledLabel>
          <Form.Field
            control={StyledInput}
            type="email"
            name="email"
            placeholder="  abc123@gmail.com"
            value={user.email}
            onChange={handleChange}
            required
          />
          <StyledLabel>Password</StyledLabel>          
          <Form.Field
            control={StyledInput}
            type="password"
            name="password"
            placeholder="  Enter password here"
            value={user.password}
            onChange={handleChange}
            required
          />
          <StyledButton>Login</StyledButton>
          <p>No Account? <Link style={{textDecoration:"none", color:"#7150FF", fontWeight:"bold"}} to="/register">REGISTER</Link></p>          
        </Form.Group>
      </Form>
    </StyledPage>
  )
}