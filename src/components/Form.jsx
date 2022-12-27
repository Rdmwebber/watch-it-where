import React from "react";
import getResults from "../util/sendFetchRequest";
import { useContext, useRef, useState } from "react";
import ResultsContext from "../store/resultsContext";
import classes from "./Form.module.css";
// import Card from "./UI/Card";

function Form() {
  const mediaTitleRef = useRef();
  const ctx = useContext(ResultsContext);
  const [toggleChecked, setToggleChecked] = useState(false);
  console.log(ctx.searchResults);
  const [titleIsEmpty, setTitleIsEmpty] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(mediaTitleRef);
    const inputData = mediaTitleRef.current.value.toLowerCase();

    if (inputData.trim() === "") {
      setTitleIsEmpty(true);
      return;
    }

    const mediaType = toggleChecked ? "series" : "movie";

    getResults(inputData, ctx, mediaType);
  };

  const toggleHandler = () => {
    setToggleChecked((prevState) => !prevState);
  };

  const movieOrSeries = toggleChecked ? "Series" : "Movie";

  const seriesClass = toggleChecked ? classes.series : "";

  // const clearResultsHandler = (event) => {
  //   event.preventDefault();
  //   ctx.clearResults();
  // };

  return (
    <section className={classes.form__container}>
      <form onSubmit={submitHandler}>
        <div className={classes.form_input__container}>
          <label htmlFor="title">{movieOrSeries} Title </label>
          <input
            className={`${classes.form_title__input} ${seriesClass}`}
            type="text"
            id="title"
            ref={mediaTitleRef}
          />
          {titleIsEmpty && <p>Title value can't be empty</p>}
          <div className={classes.form_toggle__container}>
            <h4 className={`${classes.form_movie__label} ${seriesClass}`}>
              Movie
            </h4>
            <input
              className={classes.form_media__toggle}
              type="checkbox"
              id="movie/series"
              onChange={toggleHandler}
            />
            <h4 className={`${classes.form_series__label} ${seriesClass}`}>
              Series
            </h4>
          </div>
          {/* <label htmlFor="movie/series">Movie/Series</label> */}

          <button
            className={`${classes.form_submit__button} ${seriesClass}`}
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
