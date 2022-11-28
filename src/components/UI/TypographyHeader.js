import React from "react";
import img from "../../assets/watchItWhere.svg";
import classes from "./TypographyHeader.module.css";

function TypographyHeader() {
  return <img className={classes.logo} src={img} />;
}

export default TypographyHeader;
