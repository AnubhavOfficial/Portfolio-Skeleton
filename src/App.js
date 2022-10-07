import { makeStyles } from "@material-ui/core";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Testmonials from "./components/Testmonials";
import Topbar from "./components/Topbar";
import Works from "./components/Works";

const useStyles = makeStyles({
  app: {
    height: "100vh",
  },
  sections: {
    height: "90vh",
    background: "gold",
    position: "relative",
    top: "10vh",
    scrollSnapType: "y mandatory",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&>*": {
      width: "100vw",
      height: "90vh",
      scrollSnapAlign: "center",
    },
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Topbar />
      <div className={classes.sections}>
        <Intro />
        <Portfolio />
        <Works />
        <Testmonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
