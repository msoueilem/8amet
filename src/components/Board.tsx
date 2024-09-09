import React from 'react';
import '../scss/Board.scss';

const rows = 13; // Adjust based on your design
const cols = 13; // Adjust based on your design

const generateGrid = (rows: number, cols: number) => {
  let grid = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push(<div className="dot" key={`dot-${i}-${j}`}></div>);
    }
    grid.push(<div className="row" key={`row-${i}`}>{row}</div>);
  }
  return grid;
};

const Board: React.FC = () => {
  return <div className='game-board'>
    {generateGrid(rows, cols)}
  </div>;
};

export default Board;