import React from "react";
import { Square } from "./Square";
import { useState } from "react";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turns, setTurns] = useState(true);
  const winner = getWinner(squares);

  function handleClick(i: number) {
    // prevents overwriting of the squares
    // if a value is present in a square || a winner exists, return
    if (squares[i] || winner) {
      return;
    }
    // duplicate the squares array
    const nextSquares = squares.slice();
    // checking for turns
    if (turns) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // update squares to nextSquares
    setSquares(nextSquares);
    // update turns / toggle turns
    setTurns(!turns);
  }

  function getWinner(squares: Array<number>) {
    for (var i in winCase) {
      const [a, b, c] = winCase[i];
      if (
        squares[a] &&
        squares[b] === squares[a] &&
        squares[c] === squares[a]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  let status: String;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (turns ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </div>
    </>
  );
};

const winCase = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
