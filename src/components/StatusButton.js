import React from "react";

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
    <button type="button"
      onClick={() => {
        props.statusChangeHandler(setStatus);
      }}
    >
      {props.value}
    </button>
  );
};
export default StatusButton;
