import React, { useEffect, useState } from "react";
import classes from "./Game.module.css";

const Game = (props) => {
  const [gameStatus, setGameStatus] = useState("");
  useEffect(() => {
    if (props.labels.length > 0) {
      for (let i = 0; i < props.labels.length; i++) {
        if (props.labels[i].name === "status-playable") {
          setGameStatus(() => "Playable");
          break;
        } else if (props.labels[i].name === "status-ingame") {
          setGameStatus(() => "In-Game");
          break;
        } else if (props.labels[i].name === "status-boots") {
          setGameStatus(() => "Boots");
          break;
        } else if (props.labels[i].name === "status-nothing") {
          setGameStatus(() => "Nothing");
          break;
        } else {
          setGameStatus(() => "N/A");
          break;
        }
      }
    } else {
      setGameStatus(() => "N/A");
    }
  }, [gameStatus, props.labels]);

  return (
    <div
      className={props.labels.length === 0 ? classes.hidden : classes.container}
    >
      <a
        className={classes.link}
        href={props.url}
        target="_blank"
        rel="noreferrer noopener"
      >
        {props.gameTitle}
      </a>
      <div className={classes.statusContainer}>
        <p className={classes.status}>
          {gameStatus}{" "}
          
        </p><div
            className={
              gameStatus === "Nothing"
                ? `${classes.indicator} ${classes.nothing}`
                : gameStatus === "Boots"
                ? `${classes.indicator} ${classes.boots}`
                : gameStatus === "In-Game"
                ? `${classes.indicator} ${classes.ingame}`
                : `${classes.indicator} ${classes.playable}`
            }
          ></div>
      </div>
    </div>
  );
};

export default Game;
