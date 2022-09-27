import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [gameList, setGameList] = useState([])

  useEffect(() => {
    const getList = async () => {
      await axios
        .get(
          "https://api.github.com/repos/skyline-emu/skyline-games-list/issues?labels=status-playable&per_page=100&page=1", {labels: "status-playable"}
        )
        .then((response) => {
          console.log(response);
          setGameList(response.data)
        });
    };
    getList();
  }, []);

  return <div>
    {gameList.map((game) =>{
        return(
            <div>{game.title}</div>
        )
    })}
  </div>;
};

export default Home;
