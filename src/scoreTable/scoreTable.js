import React from "react";
import RuleRow from "../RuleRow/RuleRow";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance
} from "../Rules/Rules";
import "./scoreTable.scss"

const ScoreTable = ({ scores, doScore }) => {
  return (
    <div className="ScoreTable">
      <section className="ScoreTable-section">
        <h2>upper</h2>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
              name="Ones"
              score={scores.ones}
              doScore={() => doScore("ones", ones.evalRoll)}
            />
            <RuleRow
              name="Twos"
              score={scores.twos}
              doScore={() => doScore("twos", twos.evalRoll)}
            />
            <RuleRow
              name="Threes"
              score={scores.threes}
              doScore={() => doScore("threes", threes.evalRoll)}
            />
            <RuleRow
              name="Fours"
              score={scores.fours}
              doScore={() => doScore("fours", fours.evalRoll)}
            />
            <RuleRow
              name="Fives"
              score={scores.fives}
              doScore={() => doScore("fives", fives.evalRoll)}
            />
            <RuleRow
              name="Sixes"
              score={scores.sixes}
              doScore={() => doScore("sixes", sixes.evalRoll)}
            />
          </tbody>
        </table>
      </section>
      <section className="ScoreTable-section ScoreTable-section-lower">
        <h2>Lower</h2>
        <table cellSpacing="0">
          <tbody>
            <RuleRow
              name="Three of Kind"
              score={scores.threeOfKind}
              doScore={() => doScore("threeOfKind", threeOfKind.evalRoll)}
            />
            <RuleRow
              name="Four of Kind"
              score={scores.fourOfKind}
              doScore={() => doScore("fourOfKind", fourOfKind.evalRoll)}
            />
            <RuleRow
              name="Full House"
              score={scores.fullHouse}
              doScore={() => doScore("fullHouse", fullHouse.evalRoll)}
            />
            <RuleRow
              name="Small Straight"
              score={scores.smallStraight}
              doScore={() => doScore("smallStraight", smallStraight.evalRoll)}
            />
            <RuleRow
              name="Large Straight"
              score={scores.largeStraight}
              doScore={() => doScore("largeStraight", largeStraight.evalRoll)}
            />
            <RuleRow
              name="Yahtzee"
              score={scores.yahtzee}
              doScore={() => doScore("yahtzee", yahtzee.evalRoll)}
            />
            <RuleRow
              name="Chance"
              score={scores.chance}
              doScore={() => doScore("chance", chance.evalRoll)}
            />
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ScoreTable;
