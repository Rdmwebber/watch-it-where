import classes from "./LoadingSpinner.module.css";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div className={classes.container} key="loadingSpinner">
      {" "}
      <div className={classes.spinner}></div>
    </motion.div>
  );
};

export default LoadingSpinner;
