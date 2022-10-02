import React, { useEffect, useState } from "react";
import axios from "axios";
import StatusSelect from "./StatusSelect";
import Game from "./Game";
import classes from "./Home.module.css";

const Home = () => {
  const [gameList, setGameList] = useState([]);
  const [page, setPage] = useState(1);
  const [gameStatus, setGameStatus] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

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

  //Search useEffect
  useEffect(() => {
    const getSearch = async () => {
      let response;
      if (searchValue.length > 0) {
        response = await axios.get(
          `https://api.github.com/search/issues?q=is:issue%20repo:skyline-emu/skyline-games-list%20${searchValue}`
        );
        const data = await response.data;
        setSearchResults(data.items);
      }
    };
    getSearch();
  }, [searchValue]);

  const resetHandler = () =>{
    setPage(()=> 1);
    setSearchResults([]);
    setGameStatus(()=> '')
  }

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

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchValue(e.target.search.value);
    e.target.search.value = '';
  };

  return (
    <div className={classes.container}>
      <StatusSelect
        statusChangeHandler={statusChangeHandler}
        searchHandler={searchHandler}
        resetHandler={resetHandler}
      />
      {searchResults?.length > 0
        ? searchResults.map((game) => {
            return (
              <Game
                gameTitle={game.title}
                labels={game.labels}
                url={game.html_url}
                key={game.title}
              />
            );
          })
        : gameList.map((game) => {
            return (
              <Game
                gameTitle={game.title}
                labels={game.labels}
                url={game.html_url}
                key={game.title}
              />
            );
          })}{" "}
      <div className={classes.pageContainer}>
        {page > 1 && (
          <button className={classes.pageBtn} onClick={prevPageHandler}>
            Prev. Page
          </button>
        )}
        <p>Page: {page}</p>
        {page >= 1 && gameList.length === 100 && (
          <button
            className={classes.pageBtn}
            onClick={nextPageHandler}
            type="button"
          >
            Next Page
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
