import React from 'react';
import './GameGrid.css';

const tileImages = {
  0: '/tiles/ground.png',     
  1: '/tiles/block.png',      
  2: '/tiles/lamp-off.png',  
  3: '/tiles/lamp-on.png'    
};

const GameGrid = ({ map, playerPosition }) => {
  return (
    <div className="game-grid">
      {map.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const isPlayerHere = rowIndex === playerPosition.row && colIndex === playerPosition.col;
          return (
            <div className="ground" key={`${rowIndex}-${colIndex}`}>
              <img
                src={tileImages[cell]}
                alt="ground"
                className="ground-img"
              />
              {isPlayerHere && (
                <img
                  src="/ground/player.png"
                  alt="Player"
                  className="player-img"
                />
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default GameGrid;
