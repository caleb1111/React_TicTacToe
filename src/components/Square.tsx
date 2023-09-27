import React from 'react';

interface SquareProps {
  value: number;
  handleClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, handleClick }) => (
  <button className="square" onClick={handleClick}>
    {value}
  </button>
);
