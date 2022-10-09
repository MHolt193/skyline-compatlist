import React from "react";
import classes from "./StatusButton.module.css";

const StatusButton = (props) => {
  let setStatus =
    props.value === "Playable"
      ? "status-playable"
      : props.value === "In-Game"
      ? "status-ingame"
      : props.value === "Boots"
      ? "status-boots"
      : "status-nothing";
  return (
    <button
      type="button"
      onClick={() => {
        props.statusChangeHandler(setStatus);
      }}
      className={
        props.value === "Playable"
          ? `${classes.btn} ${classes.playable}`
          : props.value === "In-Game"
          ? `${classes.btn} ${classes.ingame}`
          : props.value === "Boots"
          ? `${classes.btn} ${classes.boots}`
          : `${classes.btn} ${classes.nothing}`
      }
    >
      {props.value}
    </button>
  );
};
export default StatusButton;
