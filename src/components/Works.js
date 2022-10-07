import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    background: "yellow",
  },
});
function Works() {
  const classes = useStyles();
  return (
    <div className={classes.main} id="works">
      Works
    </div>
  );
}

export default Works;
