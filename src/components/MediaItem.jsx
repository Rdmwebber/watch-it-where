import React from "react";
import Card from "./UI/Card";
import trimString from "../util/trimString";
import classes from "./MediaItem.module.css";
import netflixLogo from "../assets/Netflix.svg";
import primeLogo from "../assets/Prime.svg";
import appleTvLogo from "../assets/AppleTV.svg";
import craveLogo from "../assets/Crave.svg";
import disneyLogo from "../assets/Disney.svg";
import { useContext } from "react";
import ResultsContext from "../store/resultsContext";

function MediaItem(props) {
  const ctx = useContext(ResultsContext);

  // check what streaming service media is on and return service logo
  const checkStreamingService = () => {
    if (props.mediaObj.streamingInfo.hasOwnProperty("disney")) {
      return disneyLogo;
    } else if (props.mediaObj.streamingInfo.hasOwnProperty("netflix")) {
      return netflixLogo;
    } else if (props.mediaObj.streamingInfo.hasOwnProperty("crave")) {
      return craveLogo;
    } else if (props.mediaObj.streamingInfo.hasOwnProperty("apple")) {
      return appleTvLogo;
    } else if (props.mediaObj.streamingInfo.hasOwnProperty("prime")) {
      return primeLogo;
    }
  };

  const streamingService = checkStreamingService();

  const trimmedString = trimString(props.mediaObj.title, 25);

  const moreInfoHandler = (event) => {
    event.preventDefault();
    console.log(props.mediaObj);
    ctx.setMoreInfo(props.mediaObj);
  };

  return (
    <li className={classes.listItems}>
      <Card>
        <a className={classes.card__overlay} onClick={moreInfoHandler}>
          <div className={classes.container}>
            <div className={classes.split__left}>
              <img
                src={props.mediaObj.posterURLs[342]}
                alt="movie poster"
              ></img>
            </div>
            <div className={classes.split__right}>
              <div className={classes.title__container}>
                <h2>{trimmedString}</h2>
                <h4>{props.mediaObj.year}</h4>
              </div>
              <div className={classes.watch__container}>
                <h4>Watch It On</h4>
                <img src={streamingService} alt="Streaming Service" />
              </div>
            </div>
            <p className={classes.more__info}>...</p>
          </div>
        </a>
      </Card>
    </li>
  );
}

export default MediaItem;
