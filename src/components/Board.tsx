import React, { useState } from 'react';
import { Square } from './Square';

type SquareValue = 'X' | 'O' | null;

export const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turns, setTurns] = useState<boolean>(true);
  const winner: SquareValue | null = calculateWinner(squares);

  const handleClick = (i: number): void => {
    if (squares[i] || winner) {
      return;
    }
    const newSquares: SquareValue[] = [...squares];
    newSquares[i] = turns ? 'X' : 'O';
    setSquares(newSquares);
    setTurns(!turns);
  };

  const renderSquare = (i: number): JSX.Element => (
    <Square value={squares[i]} handleClick={() => handleClick(i)} />
  );

  const getStatus = (): string => {
    if (winner) {
      return `Winner: ${winner}`;
    } else {
      return `Next player: ${turns ? 'X' : 'O'}`;
    }
  };

  return (
    <>
      <div className="status">{getStatus()}</div>
      {Array(3)
        .fill(null)
        .map((_, row: number) => (
          <div key={row} className="board-row">
            {Array(3)
              .fill(null)
              .map((_, col: number) => renderSquare(row * 3 + col))}
          </div>
        ))}
    </>
  );
};

function calculateWinner(squares: SquareValue[]): SquareValue | null {
  const winCases: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i: number = 0; i < winCases.length; i++) {
    const [a, b, c] = winCases[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
