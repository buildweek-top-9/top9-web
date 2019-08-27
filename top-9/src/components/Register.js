import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./Login.js"

import styled from "styled-components"

const StyledHeader = styled.h1`
  color: white
 text-align: center;
`
const StyledRegister = styled.h2`
  color: #7150FF;
`
const RegisterForm = styled.div`
  height: 350px;
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

const Register = () => {
  return (
    <div className="RegisterPage">
      <StyledHeader>Welcome to MyTop9!</StyledHeader>
      <RegisterForm className="RegisterForm">
        <StyledRegister>Register now!</StyledRegister>
        <StyledForm>
          <StyledLabel>NAME</StyledLabel>
          <StyledInput
            title="name"
            component="input" 
            type="text" 
            name="name" 
            placeholder="  First Name Last Name" 
          />
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
          <StyledButton>create account</StyledButton>
        </StyledForm>
        Already a Top-Niner?
        <Link to="/login"> LOGIN </ Link>
      </RegisterForm>
    </div>
  )
}

export default Register;