import React from "react";
import "./RuleRow.scss";

const RuleRow = ({ score, doScore, name,description }) => {
  return (
    <tr
      onClick={score === undefined ? doScore : null}
      className={`RuleRow RuleRow-${
          score === undefined ? "active" : "disabled"
      }`}
    >
      <td className="RuleRow-name">{name}</td>
      <td className="RuleRow-score">{score !== undefined ? score : description}</td>
    </tr>
  );
};

export default RuleRow;
