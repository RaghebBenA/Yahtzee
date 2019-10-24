import React from "react";
import './die.scss'

const Die = ({ locked, val,handleClick,idx ,allLocked}) => {
 
  const clickHandeler = () =>{
    handleClick(idx)
  }

  return (
    <button
      className="Die"
      style={{ backgroundColor: locked ? "grey" : "black" }}
      onClick={clickHandeler}
      disabled={allLocked}
    >
      {val}
    </button>
  );
};

export default Die;
