import React, { useState } from "react";
import Dice from "../Dice/Dice";
import "./Game.scss";
import ScoreTable from "../scoreTable/scoreTable";

const NUM_DICE = 5;
const NUM_ROLLS = 2;

const Game = () => {
  const [dice, setDice] = useState(
    Array.from({ length: NUM_DICE }).map(() => Math.ceil(Math.random() * 6))
  );
  const [locked, setLocked] = useState(Array(NUM_DICE).fill(false));
  const [roolsLeft, setRoolsLeft] = useState(NUM_ROLLS);
  const [scores, setScores] = useState({
    ones: undefined,
    twos: undefined,
    threes: undefined,
    fours: undefined,
    fives: undefined,
    sixes: undefined,
    threeOfKind: undefined,
    fourOfKind: undefined,
    fullHouse: undefined,
    smallStraight: undefined,
    largeStraight: undefined,
    yahtzee: undefined,
    chance: undefined
  });

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

  const doScore = (rulename, ruleFn) => {
    setScores((scores) => ({ ...scores, [rulename]: ruleFn(dice) }));
    setRoolsLeft(NUM_ROLLS);
    setLocked(Array(NUM_DICE).fill(false));
    setDice(
      Array.from({ length: NUM_DICE }).map(() => Math.ceil(Math.random() * 6))
    );
  };

  return (
    <div className="Game">
      <header className="Game-header">
        <h1 className="App-title">Yahtzee</h1>
        <section className="Game-Dice-section">
          <Dice
            dice={dice}
            locked={locked}
            handleClick={toggleLocked}
            allLocked={roolsLeft === 0}
          />
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
      <ScoreTable doScore={doScore} scores={scores} />
    </div>
  );
};

export default Game;
