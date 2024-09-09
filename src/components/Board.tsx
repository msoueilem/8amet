import React from 'react';
import '../scss/Board.scss';

const size = 13;

const handleDotClick = (row: number, col: number) => {
  console.log(`Dot clicked at row ${row}, col ${col}`);
  alert(`Dot clicked at row ${row}, col ${col}`);
};

const generateGrid = (size: number) => {
  let grid = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(
        <div className="cell" key={`cell-${i}-${j}`}>
          <div className="dot" key={`dot-${i}-${j}`} onClick={() => handleDotClick(i, j)}></div>
          {j < size - 1 && <div className="horizontal-line"></div>}
          {i < size - 1 && <div className="vertical-line"></div>}
        </div>
      );
    }
    grid.push(<div className="row" key={`row-${i}`}>{row}</div>);
  }
  return grid;
};

const Board: React.FC = () => {
  return <div className='game-board'>
    {generateGrid(size)}
  </div>;
};

export default Board;