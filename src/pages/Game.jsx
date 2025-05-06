import React from 'react';
import './Game.css'; // <-- stylingnya pisah ya
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const navigate = useNavigate();

  return (
    <div className="bege" style={{ backgroundImage: `url('/bg-game.png')` }}>
    <div className="game-container">
      <button className="back-btn" onClick={() => navigate('/level')}>←</button>

      <div className="game-area">
        <p></p>
    
      </div>
    </div>
    </div>
  );
};

export default Game;
