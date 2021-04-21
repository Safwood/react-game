import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import Square from "../Square/Square";
import style from './styles.module.css';
import { Button } from '@material-ui/core';

type ThreeInARowType = {
  [key: number]: "Active" | null
}

const Board: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState<string>('Current player: X');
  const [squares, setSquare] = useState<Array<null | "X" | "O">>(Array(9).fill(null));
  const [winner, setWinner] = useState<"X" | "O" | null>(null);
  const [draw, setDraw] = useState<boolean>(false);
  const [isThreeInARow, setThreeInARow] = useState<ThreeInARowType | null>(null);
  const lines: Array<Array<number>> = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const resetGame = (): void => {
    setCurrentPlayer('Current player: X');
    setSquare(Array(9).fill(null));
    setWinner(null);
    setDraw(false);
    setThreeInARow(null);
  }

  const changeCurrentPlayer = (letter: "X" | "O"): void => {
    setCurrentPlayer(`Current player: ${letter}`);
  };

  function calculateWinner(squares: Array<"O" | "X" | null>): null | "X" | "O" {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c]: Array<number> = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){

        return squares[a];
      }
    }
    return null;
  }

  function calculateActiveSquares(squares: Array<"O" | "X" | null>): null | Array<number> {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c]: Array<number> = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return [a, b, c];
      }
    }
    return null;
  }

  const handleClick = (i: number): void => {
    let currentSquares: Array<"O" | "X" | null> = squares.slice();

    if(winner) {
      return
    } else {
      if(currentPlayer === 'Current player: X') {
        currentSquares[i] = "X";
        setSquare(currentSquares);
        changeCurrentPlayer("O")
      } else {
        currentSquares[i] = "O";
        setSquare(currentSquares);
        changeCurrentPlayer("X")
      }
    }
  }

  if (winner === null && !squares.includes(null) && !draw) {
    setDraw(true);
  }

  let newWinner:"X" | "O" | null = calculateWinner(squares);
  let activeSquares: Array<number> | null = calculateActiveSquares(squares);

  if(newWinner && newWinner !== winner ) {
    setWinner(newWinner);
  }

  if(activeSquares && !isThreeInARow) {
    const currentSuares: any = Object.assign({}, isThreeInARow); //TODO
    
    activeSquares.forEach(el => {
      currentSuares[el] = "Active"
    });

    activeSquares = null;
    setThreeInARow(currentSuares);
  }

  const renderSquare = (i: number) => {
    return <Square value={squares[i]} key={i} onClick={() => handleClick(i)} isActive={isThreeInARow ? isThreeInARow[i] : ""}/>;
  }

  return (
    <div>
      <div className={style.BoardHeading}>
        <Typography className={style.BoardStatusWrapper}>
          <div className={style.Status}>{winner ? `The winner is ${winner}` : currentPlayer}</div>
        </Typography>
        <Button onClick={() => resetGame()} className={style.BoardResetButton}>
          Reset
        </Button>
      </div>
      <div className={style.BoardRow}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={style.BoardRow}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={style.BoardRow}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <Typography>
        <div className={style.Draw}>{draw ? "It's a draw" : null}</div>
      </Typography>
    </div>
  );
}

export default Board;