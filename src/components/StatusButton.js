import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./StatusButton.module.css";

const StatusButton = (props) => {
  const [totalCount, setTotalCount] = useState(``);

  useEffect(() => {
    const getTotals = async () => {
      let response;
      if (props.value === "Playable") {
        response = await axios.get(
          "https://api.github.com/search/issues?q=is:issue%20repo:skyline-emu/skyline-games-list%20is:open%20label:status-playable"
        );
      } else if (props.value === "In-Game") {
        response = await axios.get(
          "https://api.github.com/search/issues?q=is:issue%20repo:skyline-emu/skyline-games-list%20is:open%20label:status-ingame"
        );
      } else if (props.value === "Boots") {
        response = await axios.get(
          "https://api.github.com/search/issues?q=is:issue%20repo:skyline-emu/skyline-games-list%20is:open%20label:status-boots"
        );
      } else if(props.value === "Nothing"){
        response = await axios.get(
          "https://api.github.com/search/issues?q=is:issue%20repo:skyline-emu/skyline-games-list%20is:open%20label:status-nothing"
        );
      }
      const data = await response.data.total_count;

      setTotalCount(`(${data})`);
    };
    getTotals();
  }, []);

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
      <br />
      {totalCount}
    </button>
  );
};
export default StatusButton;
