
import React from 'react';
import Board from "./Board"

const Game: React.FC = () => {
  return (
    <div className="Game">
      <div className="Game-board">
        <Board />
      </div>
    </div>
  );
}

export default Game;