import React from "react";
import trimString from "../util/trimString";
import classes from "./MediaItem.module.css";
import { useContext } from "react";
import ResultsContext from "../store/resultsContext";
import checkStreamingService from "../util/checkStreamingService";

function MediaItem(props) {
  const ctx = useContext(ResultsContext);

  const { streamingLogo } = checkStreamingService(props.mediaObj.streamingInfo);

  const trimmedTitleString = trimString(props.mediaObj.title, 33);

  const moreInfoHandler = (event) => {
    event.preventDefault();
    ctx.setMoreInfo(props.mediaObj);
  };

  return (
    <li className={classes.list_item}>
      <div className={classes.container} onClick={moreInfoHandler}>
        <div className={classes.split__left}>
          <img src={props.mediaObj.posterURLs[342]} alt="movie poster"></img>
        </div>
        <div className={classes.split__right}>
          <div className={classes.title__container}>
            <h3>{trimmedTitleString}</h3>
            <h4>{props.mediaObj.year}</h4>
          </div>
          <div className={classes.watch__container}>
            <h4>WATCH IT ON</h4>
            <img src={streamingLogo} alt="Streaming Service" />
          </div>
        </div>
        <p className={classes.more__info}>...</p>
      </div>
    </li>
  );
}

export default MediaItem;
