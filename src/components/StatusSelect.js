import React from "react";
import StatusButton from "./StatusButton";
import Search from './Search'
import classes from './StatusSelect.module.css'
const StatusSelect = (props) => {
  return (
    <div className={classes.container}>
      <Search searchHandler={props.searchHandler}/>
      <div className={classes.btnContainer}>
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
