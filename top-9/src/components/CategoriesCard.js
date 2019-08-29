import React from "react";
import { css } from "@emotion/core";

export default function CategoriesCard(props) {
  const cat = props.cat;
  return (
    <div
      className={css`
        margin: 20px;
        padding: 20px;
        border: .5px solid blue;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30%;
      `}
    >
      <img src={cat.image} alt={`pic of ${cat.name}`}/>
      <h1
        className={css`
          text-align: center;
        `}
      >
        {cat.name}
      </h1>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <p>Title: {cat.title}</p>
        <p>Description: {cat.description}</p>
        <p>Photo: {cat.image_url}</p>
      </div>
    </div>
  );
}