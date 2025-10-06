import classes from "./LoadingSpinner.module.css";
import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      className={classes.container}
      key="loadingSpinner"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={({ duration: 1 }, { delay: 1 })}
    >
      <div className={classes.spinner}></div>
    </motion.div>
  );
};

export default LoadingSpinner;
