
import React from 'react';
import Board from "../Board/Board";
import style from './styles.module.css'


const Game: React.FC = () => {
  return (
    <div className={style.Game}>
        <Board />
    </div>
  );
}

export default Game;