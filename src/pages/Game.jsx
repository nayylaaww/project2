import React, { useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import GameNavbar from '../components/GameNavbar';
import GameSlidebar from '../components/GameSlidebar';
import GameGrid from '../components/GameGrid';

const initialMap = [
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 2, 0], 
];

const Game = () => {
  const navigate = useNavigate();
  const [slideOpen, setSlideOpen] = useState(true); 
  const [map, setMap] = useState(initialMap);
  const [playerPosition, setPlayerPosition] = useState({ row: 0, col: 0 });

  const movePlayer = (direction) => {
    const { row, col } = playerPosition;
    let newRow = row;
    let newCol = col;

    if (direction === 'up') newRow--;
    if (direction === 'down') newRow++;
    if (direction === 'left') newCol--;
    if (direction === 'right') newCol++;

    // Batas dan dinding
    if (
      newRow >= 0 &&
      newRow < map.length &&
      newCol >= 0 &&
      newCol < map[0].length &&
      map[newRow][newCol] !== 1
    ) {
      setPlayerPosition({ row: newRow, col: newCol });
    }
  };

  const activateLight = () => {
    const { row, col } = playerPosition;
    if (map[row][col] === 2) {
      const updatedMap = map.map((r, rIdx) =>
        r.map((tile, cIdx) => (rIdx === row && cIdx === col ? 3 : tile))
      );
      setMap(updatedMap);
    }
  };

  return (
    <div className="bege" style={{ backgroundImage: `url('/bg-game.png')` }}>
      <div className="game-container">
        <GameNavbar onSlideToggle={() => setSlideOpen(true)} />
        <GameSlidebar isOpen={slideOpen} onClose={() => setSlideOpen(false)} />

  
      </div>
    </div>
  );
};

export default Game;
