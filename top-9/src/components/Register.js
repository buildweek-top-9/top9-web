import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

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

const Register = ({ errors, touched, status }) => {
  
  const [users, setUsers] = useState([])
  console.log(users);

  useEffect (() => {
    if (status) {
      setUsers([...users, status])
    }
  }, [status])

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
          {touched.name && errors.name && (
            <p>{errors.name}</p>
          )}
          <StyledLabel>E-MAIL ADDRESS</StyledLabel>  
          <StyledInput 
            component="input" 
            type="text" 
            name="email" 
            placeholder="  Enter Email Here" 
          />
          {touched.email && errors.email && (
            <p>{errors.email}</p>
          )}
          <StyledLabel>CREATE A PASSWORD</StyledLabel>
          <StyledInput 
            component="input" 
            type="password" 
            name="password" 
            placeholder="  Enter Password Here"
          />
          {touched.password && errors.password && (
            <p>{errors.password}</p>
          )}
          <StyledButton>create account</StyledButton>
        </StyledForm>
        <StyledPTag>
          Already a Top-Niner?
          <StyledSpan>
            <StyledLoginLink href="#"> {" LOGIN"} </StyledLoginLink>
          </StyledSpan>
        </StyledPTag>
        {users.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </RegisterForm>    
    </div>
  )
}

const formikHOC = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("must enter a name"),
    email: Yup.string().required("invalid email"),
    password: Yup.string().required("must create a password")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error(err));
  }

})

const RegisterWithFormik = formikHOC(Register)

export default RegisterWithFormik; 