import React, { useEffect, useState } from "react";
import axios from "axios";
import StatusSelect from './StatusSelect'
import Game from './Game'
import classes from "./Home.module.css"

const Home = () => {
    const [gameList, setGameList] = useState([])
    const [page, setPage] = useState(1)
    const [apiUrl, setApiUrl] = useState(`https://api.github.com/repos/skyline-emu/skyline-games-list/issues?per_page=100&page=${page}`)

  useEffect(() => {
    const getList = async () => {
      await axios
        .get(apiUrl
        )
        .then((response) => {
          console.log(response);
          setGameList(()=>response.data)
        });
    };
    getList();
  }, [apiUrl, page]);

  const statusChangeHandler = (status) =>{
    setApiUrl(()=>`https://api.github.com/repos/skyline-emu/skyline-games-list/issues?labels=${status}&per_page=100&page=${page}`)
    setPage(1)
  }

  return <div className={classes.container}>
    <StatusSelect statusChangeHandler={statusChangeHandler} setPage={setPage}/>
    {gameList.map((game) =>{
        return(
            <Game gameTitle={game.title} labels={game.labels} url={game.html_url}/>
            
        )
    })}
    <button onClick={()=>setPage(()=> page+1)} type="button">Page: {page}</button>
  </div>;
};

export default Home;
