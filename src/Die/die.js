import React from "react";
import './die.scss'

const Die = ({ locked, val,handleClick,idx ,allLocked,rolling}) => {
 
  const clickHandeler = () =>{
    handleClick(idx)
  }
 const numWords = ["one","two","three","four","five","six"]
 let classes = `Die fa fa-dice-${numWords[val -1]} fa-5x `
 if(locked) classes +=  "Die-locked "
 if(rolling && !locked) classes += "Die-rolling"
  return (
    <i
      className={classes}
      onClick={clickHandeler}
      disabled={allLocked}
    />
   
  );
};

export default Die;
