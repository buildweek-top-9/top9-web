import React from "react";
import styled from "styled-components"

const StyledImg = styled.img`
  width: 200px;
  border-radius: 20px;
`
const StyledCard = styled.div`
  width: 250px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 8px 6px -6px black;
`

export default function DTop9Card({ title, description, image }) {
  
  return( 

  <StyledCard>
    <div>
      <h2>{title}</h2>
    </div>
    <div>
      <StyledImg borderRadius="15px" src={image} alt={title}/> 
    </div>
    <div>
      <p>{description}</p>
    </div>
  </StyledCard>
  );
}
