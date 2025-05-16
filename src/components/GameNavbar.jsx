import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './GameNavbar.css'; 
import BackButton from './ButtonNavbar/BackButton';
import ClearButton from './ButtonNavbar/ClearButton';
import RunButton from './ButtonNavbar/RunButton';

const GameNavbar = ({ onClear }) => {
  const navigate = useNavigate();
  const [soundOn, setSoundOn] = useState(true);

  const handleBack = () => {
    navigate('/level');
  };
  const toggleSound = () => {
    setSoundOn(!soundOn);
  };

  return (
    <div className="game-navbar">
      <BackButton onClick={handleBack} />
      <div className="right-buttons">
        <ClearButton onClick={onClear} />
      </div>
      <div className="run-buttons">
        <RunButton />
      </div>
    </div>
  );
};
export default GameNavbar;
