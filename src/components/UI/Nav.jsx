import React from "react";
import classes from "./Nav.module.css";
import logo from "../../assets/Eye_Logo.svg";
import searchIcon from "../../assets/searchIcon.svg";
import { useContext } from "react";
import ResultsContext from "../../store/resultsContext";
import { motion } from "framer-motion";

function Nav() {
  const ctx = useContext(ResultsContext);

  const returnToHomeScreenHandler = (event) => {
    event.preventDefault();
    ctx.setShowMoreInfo(false);
    ctx.setShowResults(false);
    ctx.setIsFirstLanding(true);
  };

  const clearResultsHandler = (event) => {
    event.preventDefault();
    ctx.setShowMoreInfo(false);
    ctx.setShowResults(false);
    ctx.setIsFirstLanding(false);
  };

  return (
    <motion.nav className={classes.nav} key="nav">
      <a onClick={returnToHomeScreenHandler}>
        <img src={logo} alt="" />
      </a>
      <a onClick={clearResultsHandler}>
        <img src={searchIcon} />
      </a>
    </motion.nav>
  );
}
export default Nav;
