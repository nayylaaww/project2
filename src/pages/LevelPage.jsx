import React from 'react';
import './LevelPage.css';
import { useNavigate } from 'react-router-dom';

function LevelPage() {
  const navigate = useNavigate();

  return (
    <div className="level-page-container">
          <div className="transparant">
      <button className="close-btn" onClick={() => navigate('/')}>×</button>
      <div className="level-container">
  {/* Baris atas */}
  <div className="level-row">
    <button className="level-button unlocked" onClick={() => navigate('/game')}>1</button>
    <button className="level-button locked">2</button>
    <button className="level-button locked">3</button>
  </div>

  {/* Baris bawah */}
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
