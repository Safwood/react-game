
import React from 'react';
import Board from "../Board/Board";
import './Game.css';

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