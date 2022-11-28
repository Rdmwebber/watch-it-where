import React from "react";
import { useContext } from "react";
import ResultsContext from "../store/resultsContext";
import MediaItem from "./MediaItem";
import DUMMY_RESULTS from "../util/DUMMYRESULTS";
import classes from "./MediaList.module.css";

function MediaList() {
  // use ctx.searchResults.map to get data
  const ctx = useContext(ResultsContext);

  // using dummy data while doing dev

  const data = DUMMY_RESULTS;

  return (
    <ul>
      {data.map((item) => (
        <MediaItem key={item.imdbID} mediaObj={item} />
      ))}
    </ul>
  );
}

export default MediaList;
