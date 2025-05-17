import React, { useState, useEffect } from 'react';
import './LevelPage.css';
import { useNavigate } from 'react-router-dom';

function LevelPage() {
  const navigate = useNavigate();
  const [showIntro, setShowIntro] = useState(true);


  const handleSkip = () => {
    setShowIntro(false);
  };

  return (
    <div className="level-page-container">

      
      {showIntro && (
        <div className="video-overlay">
          <div className="video-wrapper">
            <video
              src="/public/intro.mp4" 
              autoPlay
              muted
              onEnded={handleSkip}
              className="intro-video"
            />
            <button className="skip-button" onClick={handleSkip}>▶▶</button>
          </div>
        </div>
      )}

  {/* levelannnn */}
      <div className="logo">
        <img src="/logo.png" alt="logo-img" />
      </div>

      <div className="transparant">
        <button className="close-btn-home" onClick={() => navigate('/')}>🏠︎</button>
        <div className="level-container">
          <div className="level-row">
            <button className="level-button unlocked" onClick={() => navigate('/game')}>1</button>
            <button className="level-button locked">2</button>
            <button className="level-button locked">3</button>
          </div>
          <div className="level-row center-2">
            <button className="level-button locked">4</button>
            <button className="level-button locked">5</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LevelPage;
