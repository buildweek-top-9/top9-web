import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from "./Header.js";

import styled from 'styled-components'

export default function CategoriesList() {
    // TODO: Add useState to track data from useEffect
    const [catList, setCatList] = useState([]);
  
    useEffect(() => {
      
      axios
        .get("https://salty-stream-78442.herokuapp.com/home")
        .then(res => {
          setCatList(res.data.results);
        })
        .catch(err => {
          console.log("error", err);
        });
    }, []);
  
    return (
      <>
        <Header />
        <section className="category-list grid-view">
          {catList.map(cat => {
            return <CatCard cat={cat} key={cat.id} />;
          })}
        </section>
      </>
    );
  }