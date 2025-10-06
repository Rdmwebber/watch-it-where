import React from "react";
import img from "../../assets/watchItWhere.svg";
import classes from "./TypographyHeader.module.css";
import { motion } from "framer-motion";

function TypographyHeader() {
  return (
    <div>
      <motion.div
        className={classes.logo}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        key="header"
        transition={({ delay: 0.5 }, { duration: 1.5 })}
      >
        <img src={img} alt="Watch It Where Header" />;
      </motion.div>
    </div>
  );
}

export default TypographyHeader;
