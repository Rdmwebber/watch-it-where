import React from "react";
import { useContext } from "react";
import ResultsContext from "../store/resultsContext";
import MediaItem from "./MediaItem";
import classes from "./MediaList.module.css";
import { motion } from "framer-motion";

function MediaList() {
  // use .map to get data
  const ctx = useContext(ResultsContext);

  return (
    <motion.section
      className={classes.results_list__container}
      key="mediaList"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={({ duration: 1 }, { ease: "easeOut" })}
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
