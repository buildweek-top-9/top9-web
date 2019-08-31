import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import { Button, Form, Input } from 'semantic-ui-react';
import styled from "styled-components"

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

export default function DTop9Add (props){

  const [post, setPost] = useState({title: "", description: "", image_url:""})

  const handleChange = event => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    axios
      .post('https://my-top-nine-0819.herokuapp.com/home/add-top-nine', post)
      .then(res => {
        console.log(res)
          props.history.push("/home")
        
      })
      .catch(err => console.error(err))
    
    setPost({
      title: "", description: "", image_url: ""
    })
  }

  const handleRedirect = event => {
      console.log("clicked")
      return(
        <Redirect to="/"/>
      )
  }

  return(
    <>
      <StyledPage>
        <StyledHeader>MyTop9</StyledHeader>
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
            <p>Add New Post</p>
            <StyledLabel>Title</StyledLabel>
            <Form.Field
              control={StyledInput}
              type="text"
              name="title"
              placeholder="  Title"
              value={post.title}
              onChange={handleChange}
              required
            />          
            <StyledLabel>Description</StyledLabel>
            <Form.Field
              control={StyledInput}
              type="text"
              name="description"
              placeholder="  description"
              value={post.description}
              onChange={handleChange}
              required
            />
            <StyledLabel>Add an Image</StyledLabel>
            <Form.Field
              control={StyledInput}
              type="text"
              name="image_url"
              placeholder="  image URL"
              value={post.image_url}
              onChange={handleChange}
              required
            />
            <StyledButton type="submit">Add new post</StyledButton> 
          </Form.Group>
        </Form>
      </StyledPage>
    </>
  )
}