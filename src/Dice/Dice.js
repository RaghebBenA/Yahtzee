import React from "react";
import Die from "../Die/die";
import './dice.scss'

const Dice = ({locked,handleClick,dice}) => {
  return (
    <div className="Dice">
      {dice.map((d, idx) => (
        <Die val={d} locked={locked[idx]} idx={idx} key={idx} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Dice;
