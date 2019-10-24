import React, { useState } from "react";
import Dice from "../Dice/Dice";
import "./Game.scss";

const NUM_DICE = 5;
const NUM_ROLLS = 2;

const Game = () => {
  const [dice, setDice] = useState(
    Array.from({ length: NUM_DICE }).map(() => Math.ceil(Math.random() * 6))
  );
  const [locked, setLocked] = useState(Array(NUM_DICE).fill(false));
  const [roolsLeft, setRoolsLeft] = useState(NUM_ROLLS);
  const roll = () => {
    setDice((dice) =>
      dice.map((d, i) => (locked[i] ? d : Math.ceil(Math.random() * 6)))
    );
    setLocked((locked) =>
      roolsLeft > 1 ? locked : Array(NUM_DICE).fill(true)
    );
    setRoolsLeft((roolsLeft) => roolsLeft - 1);
  };

  const toggleLocked = (idx) => {
    setLocked((locked) => [
      ...locked.slice(0, idx),
      !locked[idx],
      ...locked.slice(idx + 1)
    ]);
  };

  return (
    <div className="Game">
      <header className="Game-header">
        <h1 className="App-title">Yahtzee</h1>
        <section className="Game-Dice-section">
          <Dice dice={dice} locked={locked} handleClick={toggleLocked} />
          <div className="Game-button-wrapper">
            <button
              className="Game-reroll"
              disabled={locked.every((x) => x)}
              onClick={roll}
            >
              {roolsLeft}
            </button>
          </div>
        </section>
      </header>
    </div>
  );
};

export default Game;
