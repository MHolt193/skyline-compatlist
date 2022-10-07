import React from "react";
import classes from "./PageControl.module.css";

const PageControl = (props) => {
  const firstPageHandler = () => {
    window.scroll(0,0);
    props.setPage(1);
  };
  const lastPageHandler = () => {
    props.setPage(() => Number(props.numberOfPages));
    window.scroll(0,0)
  };
  const pageNumberHandler = (e) => {
    props.setPage(() => Number(e.target.innerText));
    window.scroll(0,0);
  };
  return (
    <div className={classes.pageContainer}>
      {props.page > 1 && (
        <button onClick={firstPageHandler} className={classes.firstPage}>
          {"<<"}
        </button>
      )}
      {props.page === 1 ? (
        <button className={`${classes.btn} ${classes.activeFirstPage}`}>
          {props.page}
        </button>
      ) : (
        <button
          type="button"
          onClick={pageNumberHandler}
          className={classes.btn}
        >
          {props.page - 1}
        </button>
      )}
      {props.page > 1 ? (
        <button
          className={
            props.page < props.numberOfPages
              ? `${classes.btn} ${classes.active}`
              : `${classes.btn} ${classes.activeLastPage}`
          }
        >
          {props.page}
        </button>
      ) : (
        <button onClick={pageNumberHandler} className={classes.btn}>
          {props.page + 1}
        </button>
      )}
      {props.page > 1 && props.page < props.numberOfPages && (
        <button onClick={pageNumberHandler} className={classes.btn}>
          {props.page + 1}
        </button>
      )}
      {props.page < props.numberOfPages && (
        <button onClick={lastPageHandler} className={classes.lastPage}>
          {">>"}
        </button>
      )}
    </div>
  );
};
export default PageControl;
