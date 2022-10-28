import React, { useState } from "react";
import Input from "./Input";
import { useRef } from "react";
import getResults from "../util/sendFetchRequest";

function Form() {
  const [mediaList, setMediaList] = useState();
  const mediaTitleRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    try {
      getResults(mediaTitleRef.current.value.toLowerCase());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <Input
        label="Title"
        htmlFor="title"
        type="text"
        id=""
        reference={mediaTitleRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
