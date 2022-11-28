import React from "react";
import classes from "./Nav.module.css";
import logo from "../../assets/Eye_Logo.svg";
import searchIcon from "../../assets/searchIcon.svg";

function Nav() {
  return (
    <nav className={classes.nav}>
      <img src={logo} alt="" />
      <a>
        <img src={searchIcon} />
      </a>
    </nav>
  );
}
export default Nav;
