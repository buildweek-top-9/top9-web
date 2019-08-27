import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components"
import Register from "./Register.js"

const StyledHeader = styled.h1`
  color: white
 text-align: center;
`

const LoginForm = styled.div`
  height: 250px;
  width: 300px;
  background-color: white;
  margin: 0 auto;
  border-radius: 15px;
  text-align: center;
  padding-top: 25px;
  box-shadow: 0 8px 6px -6px black;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

`
const StyledInput = styled.input`
  border-radius: 3px;
  width: 70%
  height: 25px;
  margin-bottom: 15px;
  border: 1px solid black;
`
const StyledButton = styled.button`
  width: 70%;
  border: 4px solid #7150FF;
  font-size: 20px;
`
const StyledLabel = styled.label`
  font-size: 12px;
  color: #A86FEB;
  margin-top: 5px;
`

const StyledPTag = styled.p`
  font-size: 12px
`

const StyledSpan = styled.span`
  color: #7150FF;
  font-weight: bold;
  font-size: 12px;
`
const StyledLoginLink = styled.a`
  text-decoration: none;
`

const Login = () => {

  return (
    <div className="LoginPage">
      <StyledHeader>Welcome Back to MyTop9!</StyledHeader>
      <LoginForm className="loginForm">
        <StyledForm>
          <StyledLabel>E-MAIL ADDRESS</StyledLabel>  
          <StyledInput 
            component="input" 
            type="text" 
            name="email" 
            placeholder="  Enter Email Here" 
          />
          <StyledLabel>CREATE A PASSWORD</StyledLabel>
          <StyledInput 
            component="input" 
            type="password" 
            name="password" 
            placeholder="  Enter Password Here"
          />
          <StyledButton>LOG IN</StyledButton>
        </StyledForm>
        New to MyTop9?
        <Link to ="/register"> Register</Link>
      </LoginForm>
    </div>
  )
}

export default Login;