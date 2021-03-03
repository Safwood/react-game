import React, { useState } from 'react';
import Square from "./Square"

const Board = (props) => {
  const [currentPlayer, setCurrentPlayer] = useState('Current player: X');
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);
  const [isSquareActive, setSquareActive] = useState(null);

  const changeCurrentPlayer = (letter) => {
    setCurrentPlayer(`Current player: ${letter}`)
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (i) => {
    let currentSquares = squares.slice();

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

  if (!winner && !squares.includes(null) && !draw) {
    setDraw(true);
  }
  

  let newWinner = calculateWinner(squares)

  if(newWinner && newWinner !== winner ) {
    setWinner(newWinner);
  }
 
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} isActive={isSquareActive}/>;
  }

  return (
    <div>
      <div className="Status">{winner ? `The winner is ${winner}` : currentPlayer}</div>
      <div className="Board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="Board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="Board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="Draw">{draw ? "It's a draw" : null}</div>
    </div>
  );
}

export default Board;

