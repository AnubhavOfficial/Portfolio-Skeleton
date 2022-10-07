import React from "react";
import { makeStyles } from "@material-ui/core";
import Pic from "../assets/images/pic.png";
import Typical from "react-typical";
const useStyles = makeStyles({
  main: {
    background: "yellow",
    display: "flex",
  },
  left: {
    flex: "50%",
  },
  right: {
    flex: "50%",
  },
});
function Intro() {
  const classes = useStyles();
  return (
    <div className={classes.main} id="intro">
      <div className={classes.left}>
        <img src={Pic} alt="" />
      </div>
      <div className={classes.right}>
        <h1>
          <Typical
            loop={Infinity}
            steps={[
              "Ethusiastic Dev",
              1000,
              "Full Stack Developer",
              1000,
              "MERN Stack Developer",
              1000,
              "React Developer",
              1000,
            ]}
          />
        </h1>
      </div>
    </div>
  );
}

export default Intro;
