import React from "react";
import Card from "./UI/Card";
import classes from "./MediaItem.module.css";

function MediaItem(props) {
  if (props.mediaObj.streamingInfo.hasOwnProperty("disney")) {
    console.log(` ${props.mediaObj.title} IS ON DISNEY`);
  }
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
          </div>
        </div>
      </Card>
    </li>
  );
}

export default MediaItem;
