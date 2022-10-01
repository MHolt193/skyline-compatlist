import React, { useEffect, useState } from "react";
import axios from "axios";
import StatusSelect from "./StatusSelect";
import Game from "./Game";
import classes from "./Home.module.css";

const Home = () => {
  const [gameList, setGameList] = useState([]);
  const [page, setPage] = useState(1);
  const [gameStatus, setGameStatus] = useState("");

  useEffect(() => {
    const getList = async () => {
      let response;
      if (gameStatus.length === 0) {
        response = await axios.get(
          `https://api.github.com/repos/skyline-emu/skyline-games-list/issues?per_page=100&page=${page}`
        );
      } else {
        response = await axios.get(
          `https://api.github.com/repos/skyline-emu/skyline-games-list/issues?labels=${gameStatus}&per_page=100&page=${page}`
        );
      }
      const data = await response.data;
      setGameList(data);
    };
    getList();
  }, [page, gameStatus]);

  const statusChangeHandler = (status) => {
    setPage(() => 1);
    setGameStatus(() => status);
  };
  const nextPageHandler = () => {
    window.scroll(0, 0);
    setPage((prev) => prev + 1);
  };
  const prevPageHandler = () => {
    window.scroll(0, 0);
    setPage((prev) => prev - 1);
  };

  return (
    <div className={classes.container}>
      <StatusSelect
        statusChangeHandler={statusChangeHandler}
        setPage={setPage}
      />
      {gameList.map((game) => {
        return (
          <Game
            gameTitle={game.title}
            labels={game.labels}
            url={game.html_url}
          />
        );
      })}{" "}
      <div className={classes.pageContainer}>
        {page > 1 && <button onClick={prevPageHandler}>Prev. Page</button>}
        <p>Page: {page}</p>
        {page >= 1 && gameList.length === 100 && (
          <button onClick={nextPageHandler} type="button">
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
