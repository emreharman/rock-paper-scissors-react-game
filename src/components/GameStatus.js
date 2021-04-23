import React from "react";

const GameStatus = ({ wins, loses }) => {
  return (
    <div className="game-status">
      <div className="wins">
        <h3>Wins</h3>
        <h1>{wins}</h1>
      </div>
      <div className="loses">
        <h3>Loses</h3>
        <h1>{loses}</h1>
      </div>
    </div>
  );
};

export default GameStatus;
