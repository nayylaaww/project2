import React from 'react';
import './GameGrid.css';

const GameGrid = ({ map, playerPosition }) => {
  return (
    <div className="grid-container">
      {map.map((row, rowIndex) =>
        row.map((tile, colIndex) => {
          const isPlayerHere = playerPosition.row === rowIndex && playerPosition.col === colIndex;
          let className = 'tile';

          switch (tile) {
            case 1:
              className += ' wall';
              break;
            case 2:
              className += ' light-off';
              break;
            case 3:
              className += ' light-on';
              break;
            default:
              className += ' floor';
          }

          return (
            <div key={`${rowIndex}-${colIndex}`} className={className}>
              {isPlayerHere && <div className="player" />}
            </div>
          );
        })
      )}
    </div>
  );
};

export default GameGrid;
