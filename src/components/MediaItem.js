import React from "react";
import Card from "./UI/Card";
import classes from "./MediaItem.module.css";
import netflixLogo from "../assets/Netflix.svg";
import primeLogo from "../assets/Prime.svg";
import appleTvLogo from "../assets/AppleTV.svg";
import craveLogo from "../assets/Crave.svg";
import disneyLogo from "../assets/Disney.svg";

function MediaItem(props) {
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

  return (
    <li className={classes.listItems}>
      <Card>
        <div className={classes.container}>
          <div className={classes.split_Left}>
            <img src={props.mediaObj.posterURLs[342]} alt="movie poster"></img>
          </div>
          <div className={classes.split_Right}>
            <h2>{props.mediaObj.title}</h2>
            <h3>{props.mediaObj.year}</h3>
            <h3>Watch It On</h3>
            <img src={streamingService} alt="Streaming Service" />
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MediaItem;
