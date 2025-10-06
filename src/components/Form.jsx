import React from "react";
import getResults from "../util/sendFetchRequest";
import DUMMY_RESULTS from "../util/DUMMYRESULTS";
import { useContext, useRef, useState } from "react";
import ResultsContext from "../store/resultsContext";
import classes from "./Form.module.css";
import { motion } from "framer-motion";

function Form() {
  const mediaTitleRef = useRef();
  const ctx = useContext(ResultsContext);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [titleIsEmpty, setTitleIsEmpty] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log(mediaTitleRef);
    const inputData = mediaTitleRef.current.value.toLowerCase();

    if (inputData.trim() === "") {
      setTitleIsEmpty(true);
      return;
    }

    const mediaType = toggleChecked ? "series" : "movie";
    ctx.setIsLoading(true);
    // Not currently paying for API. Using dummy data for example.
    //const searchResults = await getResults(inputData, mediaType);
    //ctx.setResults(searchResults);
    ctx.setResults(DUMMY_RESULTS);
    ctx.setShowResults(true);
    ctx.setIsLoading(false);
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
    <motion.section
      className={classes.form__container}
      key="form"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={({ duration: 1 }, { ease: "easeOut" })}
    >
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

          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            className={`${classes.form_submit__button} ${seriesClass}`}
            type="submit"
          >
            Search
          </motion.button>
        </div>
      </form>
    </motion.section>
  );
}

export default Form;
