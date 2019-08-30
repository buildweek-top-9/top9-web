import React, { useState } from "react";
import CatData from "./CatData";

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
    <form onSubmit={submitForm}>
      <label htmlFor="title">Category Title</label>
      <input
        type="text"
        name="title"
        placeholder="Category Title"
        value={category.title}
        onChange={changeHandler}
      />
      <label htmlFor="image_url">Image URL</label>
      <input
        type="text"
        name="link"
        placeholder="paste url here..."
        value={category.image_url}
        onChange={changeHandler}
      />

      <label htmlFor="body">Category Description</label>
      <textarea
        name="body"
        placeholder="Enter category description here..."
        value={category.body}
        onChange={changeHandler}
      />

      <button type="submit">Add Category</button>
    </form>
  );
};

export default CatForm;