import React from "react";
import Input from "./Input";
import { useRef } from "react";
import getResults from "../util/sendFetchRequest";
import { useContext } from "react";
import ResultsContext from "../store/resultsContext";
import Card from "./UI/Card";

function Form() {
  console.log("render form");
  const mediaTitleRef = useRef();
  const ctx = useContext(ResultsContext);

  console.log(ctx.searchResults);

  const submitHandler = (event) => {
    event.preventDefault();
    const inputData = mediaTitleRef.current.value.toLowerCase();

    if (inputData.trim().length < 3) {
      return;
    }

    getResults(inputData, ctx);
  };

  const clearResultsHandler = (event) => {
    event.preventDefault();
    ctx.clearResults();
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <Input
          label="Title"
          htmlFor="title"
          type="text"
          id=""
          reference={mediaTitleRef}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={clearResultsHandler}>
          Clear Results
        </button>
      </form>
    </Card>
  );
}

export default Form;
