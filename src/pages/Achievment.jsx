import React from 'react';
import './Achievment.css';
import { useNavigate } from 'react-router-dom';

function LevelPage() {

  const navigate = useNavigate();
  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="achie-page-container">
        <div className="logo">
          <img src="/logo.png" alt="logo-img" />
        </div>
          <button className="close-btn-home" onClick={handleClose}>🏠︎</button>
    </div>
  );
}

export default LevelPage;
