import React from "react";
import classes from "./LandingPage.module.css";
import netflixLogo from "../assets/Netflix.svg";
import primeLogo from "../assets/Prime.svg";
import appleTvLogo from "../assets/AppleTV.svg";
import craveLogo from "../assets/Crave.svg";
import disneyLogo from "../assets/Disney.svg";
import { useContext } from "react";
import ResultsContext from "../store/resultsContext";

function LandingPage() {
  const ctx = useContext(ResultsContext);

  const searchButtonHandler = function () {
    ctx.setIsFirstLanding(false);
    console.log("FIRST LANDING");
  };

  return (
    <section>
      <div className={classes.streaming_service__container}>
        <div className={classes.streaming_service__logo}>
          <img
            className={classes.streaming_service__img}
            src={netflixLogo}
            alt="Streaming Service"
          />
        </div>
        <div className={classes.streaming_service__logo}>
          <img src={primeLogo} alt="Streaming Service" />
        </div>
        <div className={classes.streaming_service__logo}>
          <img src={appleTvLogo} alt="Streaming Service" />
        </div>
        <div className={classes.streaming_service__logo}>
          <img src={craveLogo} alt="Streaming Service" />
        </div>
        <div className={classes.streaming_service__logo}>
          <img src={disneyLogo} alt="Streaming Service" />
        </div>
      </div>
      <div className={classes.description__container}>
        <h3>
          Find where you can stream any movie or series in <span>CANADA</span>
        </h3>
      </div>
      <button
        onClick={searchButtonHandler}
        className={`${classes.landing_page__button} `}
        type="button"
      >
        Search
      </button>
    </section>
  );
}

export default LandingPage;
