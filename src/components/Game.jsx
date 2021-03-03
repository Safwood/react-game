
import React from 'react';
import Board from "./Board"

const Game = (props) => {
  return (
    <div className="Game">
      <div className="Game-board">
        <Board />
      </div>
      <div className="Game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;