import React from 'react';
import './GameGrid.css';
import Character from '../components/Character';


const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;

const tileImages = {
  0: '/floor.png',
  1: '/wall.png',
  2: '/lamp-off.png',
  3: '/lamp-on.png',

};

const GameGrid = ({ map, playerPosition }) => {
  return (
    <div className="game-grid">
      {map.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isPlayerHere = rowIndex === playerPosition.row && colIndex === playerPosition.col;
          const x = (colIndex - rowIndex) * (TILE_WIDTH / 2);
          const y = (colIndex + rowIndex) * (TILE_HEIGHT / 2);

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="floor"
              style={{ left: `${x}px`, top: `${y}px` }}
            >
              <img src={tileImages[cell]} alt="floor" className="floor-img" />
              {isPlayerHere && (
                
               <Character action="walk" x={x} y={y} />
               
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default GameGrid;
