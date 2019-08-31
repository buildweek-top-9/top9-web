import React from "react"
import { Link } from "react-router-dom";
import DTop9List from "./DTop9List.js"
import styled from "styled-components"

const StyledDiv = styled.div`
  text-align: center;
  padding: 30px 0;

`
const StyledHeader = styled.h1`
  color: white;
`

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`

const StyledButton = styled.button`
  height: 40px;
  width: 100px;
  margin: 0 20px;
  border-radius: 5px;
  background-color: white;
  font-weight: bold;

`

export default function Home(){
  return(
    <>
    <StyledDiv>
      <StyledHeader>My Top 9!</StyledHeader>
      <StyledButtonGroup>
        <Link to="/addpost"> 
          <StyledButton>ADD A POST</StyledButton>
        </Link>
        <StyledButton>EDIT MY POSTS</StyledButton>
        <StyledButton>DELETE A POST</StyledButton>
      </StyledButtonGroup>
    </StyledDiv>
    <DTop9List />
    </>
  )
}