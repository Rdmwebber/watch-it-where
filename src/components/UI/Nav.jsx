import React from "react";
import classes from "./Nav.module.css";
import logo from "../../assets/Eye_Logo.svg";
import searchIcon from "../../assets/searchIcon.svg";
import { useContext } from "react";
import ResultsContext from "../../store/resultsContext";

function Nav() {
  const ctx = useContext(ResultsContext);

  const clearResultsHandler = (event) => {
    event.preventDefault();
    ctx.setIsFirstLanding(false);
    ctx.setShowMoreInfo(false);
    ctx.setShowResults(false);
  };

  return (
    <nav className={classes.nav} key="nav">
      <img src={logo} alt="" />
      <a onClick={clearResultsHandler}>
        <img src={searchIcon} />
      </a>
    </nav>
  );
}
export default Nav;
