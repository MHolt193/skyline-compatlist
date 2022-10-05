import React from "react";

const PageControl = (props) => {
  return (
    <div>
      {props.page > 1 && <button onClick={()=>props.setPage(1)}>{"<<"}</button>}
      {props.page === 1 ? (
        <button>{props.page}</button>
      ) : (
        <button>{props.page - 1}</button>
      )}
      {props.page > 1 ? (
        <button>{props.page}</button>
      ) : (
        <button>{props.page + 1}</button>
      )}
      {props.page > 1 && <button>{props.page+1}</button>} 
    </div>
  );
};
export default PageControl;
