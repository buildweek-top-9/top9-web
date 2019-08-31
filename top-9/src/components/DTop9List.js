import React, { useEffect, useState } from "react"
import axios from "axios"
import DTop9Card from "./DTop9Card"
import styled from "styled-components"

const StyledHome = styled.div`
 
  width: 100%;
  text-align: center;
  display: flex;
  flexwrap: wrap;
  justify-content: space-evenly;

`

export default function DTop9List(props) {
  const [savedPosts, setSavedPosts] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://my-top-nine-0819.herokuapp.com/users/4/top-nine`)
      .then(res => {
        setSavedPosts(res.data);
        console.log("MY DATA", localStorage);
      })
      .catch(err => console.error("Fix this: ", err))
  }, []);

  return (
    <StyledHome>
      {savedPosts.map( post => (
          <DTop9Card
            image={post.image_url}
            key={post.id}
            title={post.title}
            description={post.description}
          />
        ))
      }
    </StyledHome>
  );
}