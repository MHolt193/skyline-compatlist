import React from "react";
import StatusButton from "./StatusButton";
import classes from './StatusSelect.module.css'
const StatusSelect = (props) => {
  return (
    <div className={classes.container}>
      <h1>Skyline Emulator Compatability</h1>
      <div>
        <StatusButton
          value="Playable"
          statusChangeHandler={props.statusChangeHandler}
        />
        <StatusButton
          value="In-Game"
          statusChangeHandler={props.statusChangeHandler}
        />
        <StatusButton
          value="Boots"
          statusChangeHandler={props.statusChangeHandler}
        />
        <StatusButton
          value="Nothing"
          statusChangeHandler={props.statusChangeHandler}
        />
      </div>
    </div>
  );
};

export default StatusSelect;
