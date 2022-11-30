import React from "react";
import { useContext } from "react";
import ResultsContext from "../store/resultsContext";
import Card from "./UI/Card";
import classes from "./MoreInfo.module.css";

function MoreInfo() {
  const ctx = useContext(ResultsContext);
  const clearMoreInfoHandler = () => {
    ctx.setMoreInfo(null);
  };

  return (
    <Card>
      <div className={classes.containers}>
        <h1 className={classes.exit} onClick={clearMoreInfoHandler}>
          X
        </h1>
        <p>WHATS GOING On</p>
      </div>
    </Card>
  );
}

export default MoreInfo;
