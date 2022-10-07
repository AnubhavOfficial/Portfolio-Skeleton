import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    background: "lightblue",
    // height: "100vh",
  },
});
function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.main} id="contact">
      Contact
    </div>
  );
}

export default Contact;
