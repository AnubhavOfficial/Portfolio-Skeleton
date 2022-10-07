import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    background: "pink",
    // height: "100vh",
  },
});
function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.main} id="portfolio">
      Portfolio
    </div>
  );
}

export default Portfolio;
