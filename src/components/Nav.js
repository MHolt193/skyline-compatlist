import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import classes from "./Nav.module.css";
import { BiMenu, BiX } from "react-icons/bi";

const Nav = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.innerWidth < 720) {
      setIsMobile(true);
    }
  }, []);

  return (
    <nav className={classes.nav}>
      <div className={classes.logoContainer} onClick={props.resetHandler}>
        <img src={logo} alt="" className={classes.logo} />
        <div>
          <h1 className={classes.skyline}>Skyline</h1>
          <h2 className={classes.emulator}>compatibility</h2>
        </div>
      </div>
      {!isMobile && (
        <ul className={classes.linksContainer}>
          <a href="https://skyline-emu.one/#">
            <li>Skyline Home</li>
          </a>
          <a href="https://skyline-emu.one/#about">
            <li>About Skyline</li>
          </a>
          <a href="https://skyline-emu.one/download">
            <li>Download Skyline</li>
          </a>
        </ul>
      )}
      {isMobile && (
        <button
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className={classes.menuButton}
          type="button"
        >
          {!menuOpen ? <BiMenu /> : <BiX />}
        </button>
      )}
      {isMobile && menuOpen && (
        <ul className={classes.linksContainer}>
          <a href="https://skyline-emu.one/#">
            <li>Skyline Home</li>
          </a>
          <a href="https://skyline-emu.one/#about">
            <li>About Skyline</li>
          </a>
          <a href="https://skyline-emu.one/download">
            <li>Download Skyline</li>
          </a>
        </ul>
      )}
    </nav>
  );
};
export default Nav;
