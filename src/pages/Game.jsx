import React, { useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import GameNavbar from '../components/GameNavbar';
import GameSlidebar from '../components/GameSlidebar';
import GameGrid from '../components/GameGrid';

const map = [
  [0, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0],
];

const Game = () => {
  const navigate = useNavigate();
  const [slideOpen, setSlideOpen] = useState(true); // auto buka!

  return (
    <div className="bege" style={{ backgroundImage: `url('/bg-game.png')` }}>
      <div className="game-container">
        <GameNavbar onSlideToggle={() => setSlideOpen(true)} />
        <GameSlidebar isOpen={slideOpen} onClose={() => setSlideOpen(false)} />

        <div className="game-area">
          <GameGrid map={map} />
        </div>
      </div>
    </div>
  );
};

export default Game;
