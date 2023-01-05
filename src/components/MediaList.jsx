import React from "react";
import { useContext } from "react";
import ResultsContext from "../store/resultsContext";
import MediaItem from "./MediaItem";
import DUMMY_RESULTS from "../util/DUMMYRESULTS";
import classes from "./MediaList.module.css";
import { motion } from "framer-motion";

function MediaList() {
  // use .map to get data
  const ctx = useContext(ResultsContext);

  // using dummy data while doing dev

  const data = DUMMY_RESULTS;

  return (
    <motion.section
      className={classes.results_list__container}
      key="mediaList"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={({ duration: 1 }, { delay: 0.75 })}
    >
      <ul>
        {ctx.searchResults.map((item) => (
          <MediaItem key={item.imdbID} mediaObj={item} />
        ))}
      </ul>
    </motion.section>
  );
}

export default MediaList;
