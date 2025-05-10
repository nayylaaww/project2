import React from 'react';
import './GameGrid.css';

const GameGrid = ({ map }) => {
  return (
    <div className="grid-container">
      {map.map((row, rowIndex) =>
        row.map((tile, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`tile ${tile === 1 ? 'wall' : 'floor'}`}
          />
        ))
      )}
    </div>
  );
};

export default GameGrid;
