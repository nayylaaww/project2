import React from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import GameNavbar from '../components/GameNavbar';

const Game = () => {
  const navigate = useNavigate();

  return (
    <div className="bege" style={{ backgroundImage: `url('/bg-game.png')` }}>
        <div className="game-container">
             <GameNavbar />
            <div className="game-area">
               <p></p>
            </div>

        </div>
    </div>
  );
};

export default Game;
