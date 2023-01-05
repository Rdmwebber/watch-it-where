import React from "react";
import { useContext } from "react";
import ResultsContext from "../store/resultsContext";
import classes from "./MoreInfo.module.css";
import imdbLogo from "../assets/IMDb.png";
import checkStreamingService from "../util/checkStreamingService";
import trimString from "../util/trimString";
import { motion } from "framer-motion";

function MoreInfo() {
  const {
    moreInfo: moreInfoArray,
    setShowMoreInfo,
    setShowResults,
  } = useContext(ResultsContext);
  const moreInfo = moreInfoArray[0];

  const hideMoreInfoHandler = () => {
    setShowMoreInfo(false);
    setShowResults(true);
  };

  const { streamingLogo, streamingLink } = checkStreamingService(
    moreInfo.streamingInfo
  );

  const formattedImdbScore = function (imdbScore) {
    const decimalScore = imdbScore.toString().split("").join(".");
    return `${decimalScore}/10`;
  };

  const formattedScoreResult = formattedImdbScore(moreInfo.imdbRating);

  // formatting votes from full number to abbreviated nK
  const formattedVoteCount = function (voteCount) {
    const truncatedCount = voteCount.toString().slice(0, -3);
    return `${truncatedCount}k Votes`;
  };

  const formattedVoteCountResult = formattedVoteCount(moreInfo.imdbVoteCount);

  //formats runtime from minutes to hours and minutes
  const formattedRunTime = function (runtime) {
    const hrs = Math.floor(runtime / 60);
    const hrsZeroGuarded = () => {
      if (hrs < 1) {
        return "";
      }
      return `${hrs}H`;
    };
    const mins = runtime % 60;
    return `${hrsZeroGuarded()} ${mins}M`;
  };

  // checks for number of seasons and returns proper string
  const checkForMultipleSeasons = function () {
    if (moreInfo.seasons > 1) {
      return `${moreInfo.seasons} Seasons`;
    }
    if (moreInfo.seasons === 1) {
      return `${moreInfo.seasons} Season`;
    }
  };

  // function to determine if media is a series to display the number of episodes and if it is a movie the runtime
  const runtimeOrEpisodes = function () {
    if (moreInfo.hasOwnProperty("runtime")) {
      return formattedRunTime(moreInfo.runtime);
    }
    if (moreInfo.hasOwnProperty("seasons")) {
      return checkForMultipleSeasons();
    }
  };
  console.log(runtimeOrEpisodes());

  const trimmmedTitleString = trimString(moreInfo.title, 50);

  return (
    <motion.section
      onClick={hideMoreInfoHandler}
      style={{ backgroundImage: `url(${moreInfo.posterURLs[500]})` }}
      className={classes.container}
      key="moreInfo"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={({ duration: 1 }, { delay: 0.75 })}
    >
      <h2 className={classes.media_title}>{trimmmedTitleString}</h2>
      <div className={classes.year_rating__container}>
        <h3 className={classes.media_year}>{moreInfo.year}</h3>
        <div className={classes.score_logo__container}>
          <img src={imdbLogo} />
          <div className={classes.score_votes__container}>
            <h5>{formattedScoreResult}</h5>
            <h5>{formattedVoteCountResult}</h5>
          </div>
        </div>
        <h3>{runtimeOrEpisodes()}</h3>
      </div>
      <div className={classes.overview__container}>
        <p>{moreInfo.overview}</p>
      </div>
      <a href={streamingLink} target="_blank">
        <div className={classes.streaming_service__container}>
          <h3>WATCH IT ON</h3>
          <img
            className={classes.streaming_service}
            src={streamingLogo}
            alt="streaming source"
          />
        </div>
      </a>
    </motion.section>
  );
}

export default MoreInfo;
