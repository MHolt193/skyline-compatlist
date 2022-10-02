import React from "react";
import classes from "./Search.module.css"

const Search = (props) => {
  return (
    <div>
      <form onSubmit={props.searchHandler} className={classes.searchContainer}>
        <input id="search" type="search" placeholder="Search Game Title" className={classes.searchBar} />
        <button type="submit" className={classes.searchBtn}>Search</button>
      </form>
    </div>
  );
};

export default Search;
