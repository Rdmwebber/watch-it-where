import React, { useState } from "react";
import Input from "./Input";
import { useRef } from "react";

function Form() {
  const [mediaList, setMediaList] = useState();
  const mediaTitleRef = useRef();

  const sendFetchRequest = async (title) => {
    console.log(title);

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "f5554480d3msh25650220d801b75p16a0f5jsn671b1111956d",
        "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://streaming-availability.p.rapidapi.com/search/ultra?country=ca&services=netflix%2Cprime%2Cdisney%2Capple&type=movie&order_by=imdb_vote_count&page=1&desc=true&language=en&keyword=${title}&output_language=en`,
      options
    );

    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }

    const data = await response.json();

    console.log(data);
    console.log(data.results);

    const titleFilteredData = data.results.filter((res) =>
      res.title.toLowerCase().includes(title)
    );

    console.log(titleFilteredData);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    try {
      sendFetchRequest(mediaTitleRef.current.value.toLowerCase());
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
