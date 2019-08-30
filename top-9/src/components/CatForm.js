import React, { useState } from "react";
import { Link } from "react-router-dom";
import CatData from "./CatData";
import styled from "styled-components";
import { Button, Form, Input } from 'semantic-ui-react';
import Header from "./Header";

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



const CatForm = props => {
  console.log(props);
  const [category, setCategory] = useState({ title: "", description: "", image_url: "" });

  const changeHandler = event => {
    // const newObj = {...note}
    // newObj[event.target.name] = event.target.value;
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newCategory = {
      ...Category,
      id: Date.now()
    };
    props.addNewCategory(newCategory);
  };

  return (
    <Header />
    <Form onSubmit={submitForm}>
      <StyledLabel htmlFor="title">Category Title</StyledLabel>
      <StyledInput
        type="text"
        name="title"
        placeholder="Category Title"
        value={category.title}
        onChange={changeHandler}
      />
      <StyledLabel htmlFor="image_url">Image URL</StyledLabel>
      <StyledInput
        type="text"
        name="link"
        placeholder="paste url here..."
        value={category.image_url}
        onChange={changeHandler}
      />

      <StyledLabel htmlFor="body">Category Description</StyledLabel>
      <textarea
        name="body"
        placeholder="Enter category description here..."
        value={category.body}
        onChange={changeHandler}
      />

      <StyledButton type="submit">Add Category</StyledButton>
    </Form>
  );
};

export default CatForm;