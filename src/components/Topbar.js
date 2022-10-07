import React, { useState } from "react";
import { AppBar, makeStyles, Toolbar, Modal, Slide } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
const useStyles = makeStyles({
  appbar: {
    height: "10vh",
    boxShadow: "none",
    transition: "all 0.5s ease",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "none",
  },
  name: {
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1.8rem",
  },
  menu: {
    fontSize: "1.8rem",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.2)",
    },
  },
  modal: {
    background: "#15023a",
    width: "20vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: "80vw",
    boxShadow: "none",
    outline: "none",
  },
  modalTextDiv: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "5rem",
    width: "100%",
    height: "55%",
    justifyContent: "space-around",
    fontSize: "1.7rem",
    padding: "0 2.5rem",
  },
  modalClose: {
    color: "white",
    float: "right",
    cursor: "pointer",
    marginRight: "1.5rem",
    marginTop: "1rem",
    fontSize: "1.8rem",
    stroke: "white",
    strokeWidth: "0.3",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  menuItem: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      transformOrigin: "left",
      transform: "scale(1.2)",
      fontWeight: "500",
    },
  },
});
function Topbar() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (e) => {
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);
  return (
    <div>
      <AppBar
        className={classes.appbar}
        style={
          isOpen
            ? { background: "#15023a", color: "white" }
            : { background: "white", color: "#15023a" }
        }
      >
        <Toolbar className={classes.toolbar}>
          <a
            href="#intro"
            className={classes.name}
            style={isOpen ? { color: "white" } : { color: "#15023a" }}
          >
            {"<Anubhav />"}
          </a>
          <div>
            <MenuIcon className={classes.menu} onClick={(e) => handleOpen(e)} />
          </div>
        </Toolbar>
      </AppBar>
      <div onClick={handleClose}>
        <Modal open={isOpen} onClose={handleClose} hideBackdrop={true}>
          <Slide in={isOpen} direction="up" timeout={500}>
            <div className={classes.modal}>
              <CloseIcon onClick={handleClose} className={classes.modalClose} />
              <div className={classes.modalTextDiv}>
                <a href="#intro" className={classes.menuItem}>
                  <span onClick={handleClose}>Intro</span>
                </a>
                <a href="#portfolio" className={classes.menuItem}>
                  <span onClick={handleClose}>Portfolio</span>
                </a>
                <a href="#works" className={classes.menuItem}>
                  <span onClick={handleClose}>Projects</span>
                </a>
                <a href="#testimonials" className={classes.menuItem}>
                  <span onClick={handleClose}>Testimonials</span>
                </a>
                <a href="#contact" className={classes.menuItem}>
                  <span onClick={handleClose}>Contact</span>
                </a>
              </div>
            </div>
          </Slide>
        </Modal>
      </div>
    </div>
  );
}

export default Topbar;
