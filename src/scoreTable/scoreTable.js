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
   
  const getTotalScore = () =>{
     let totalScore = 0

     for(let key in scores){
       if(scores[key]) totalScore += scores[key]
     }
     return totalScore
  }

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
              description={ones.description}
            />
            <RuleRow
              name="Twos"
              score={scores.twos}
              doScore={() => doScore("twos", twos.evalRoll)}
              description={twos.description}
            />
            <RuleRow
              name="Threes"
              score={scores.threes}
              doScore={() => doScore("threes", threes.evalRoll)}
              description={threes.description}
            />
            <RuleRow
              name="Fours"
              score={scores.fours}
              doScore={() => doScore("fours", fours.evalRoll)}
              description={fours.description}
            />
            <RuleRow
              name="Fives"
              score={scores.fives}
              doScore={() => doScore("fives", fives.evalRoll)}
              description={fives.description}
            />
            <RuleRow
              name="Sixes"
              score={scores.sixes}
              doScore={() => doScore("sixes", sixes.evalRoll)}
              description={sixes.description}
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
              description={threeOfKind.description}
            />
            <RuleRow
              name="Four of Kind"
              score={scores.fourOfKind}
              doScore={() => doScore("fourOfKind", fourOfKind.evalRoll)}
              description={fourOfKind.description}
            />
            <RuleRow
              name="Full House"
              score={scores.fullHouse}
              doScore={() => doScore("fullHouse", fullHouse.evalRoll)}
              description={fullHouse.description}
            />
            <RuleRow
              name="Small Straight"
              score={scores.smallStraight}
              doScore={() => doScore("smallStraight", smallStraight.evalRoll)}
              description={smallStraight.description}
            />
            <RuleRow
              name="Large Straight"
              score={scores.largeStraight}
              doScore={() => doScore("largeStraight", largeStraight.evalRoll)}
              description={largeStraight.description}
            />
            <RuleRow
              name="Yahtzee"
              score={scores.yahtzee}
              doScore={() => doScore("yahtzee", yahtzee.evalRoll)}
              description={yahtzee.description}
            />
            <RuleRow
              name="Chance"
              score={scores.chance}
              doScore={() => doScore("chance", chance.evalRoll)}
              description={chance.description}
            />
          </tbody>
        </table>
      </section>
      <h1>Total Score {getTotalScore()}</h1>
    </div>
  );
};

export default ScoreTable;
