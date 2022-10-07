import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    background: "green",
    // height: "100vh",
  },
});
function Testmonials() {
  const classes = useStyles();
  return (
    <div className={classes.main} id="testimonials">
      Testmonials
    </div>
  );
}

export default Testmonials;
