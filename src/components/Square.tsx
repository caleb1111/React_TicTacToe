import React from "react";

interface SquareProps {
  value: number;
  handleClick: () => void;
}

export const Square = ({ value, handleClick }: SquareProps) => {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
};
