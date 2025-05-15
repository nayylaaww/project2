import React from 'react';
import './GameGrid.css';
import tileNormal from '../assets/tile.png';
import tileLight from '../assets/tile-light.png';
import tileBlocked from '../assets/tile-blocked.png';
import tileActivated from '../assets/tile-activated.png';
import characterImg from '../assets/character.png';

const TILE_WIDTH = 64;
const TILE_HEIGHT = 32;

const GameGrid = ({ map, playerPosition }) => {
  return (
    <div className="grid-container">
      {map.map((row, rowIndex) =>
        row.map((tile, colIndex) => {
          const isPlayerHere =
            playerPosition.row === rowIndex &&
            playerPosition.col === colIndex;

          const x = (colIndex - rowIndex) * (TILE_WIDTH / 2);
          const y = (colIndex + rowIndex) * (TILE_HEIGHT / 2);

          let tileImg = tileNormal;
          if (tile === 1) tileImg = tileBlocked;
          if (tile === 2) tileImg = tileLight;
          if (tile === 3) tileImg = tileActivated;

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="tile"
              style={{ left: `${x}px`, top: `${y}px` }}
            >
              <img src={tileImg} alt="tile" className="tile-img" />
              {isPlayerHere && (
                <img src={characterImg} alt="player" className="player-img" />
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default GameGrid;