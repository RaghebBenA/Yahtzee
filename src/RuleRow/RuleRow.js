import React from "react";
import "./RuleRow.scss";

const RuleRow = ({ score, doScore, name }) => {
  return (
    <tr
      onClick={score === undefined ? doScore : null}
      className={`RuleRow RuleRow-${
          score === undefined ? "active" : "disabled"
      }`}
    >
      <td className="RuleRow-name">{name}</td>
      <td className="RuleRow-score">{score}</td>
    </tr>
  );
};

export default RuleRow;
