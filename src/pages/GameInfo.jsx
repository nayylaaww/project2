import React, { useState } from 'react';
import './GameInfo.css';
import { useNavigate } from 'react-router-dom';

function GameInfo() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: 'Tentang Game',
      content: 'Ini adalah game tentang petualangan di dunia algoritma...'
    },
    {
      title: 'Cara Bermain',
      content: 'Kamu bisa menggerakkan karakter menggunakan panah atau tombol tertentu...'
    },
    {
      title: 'Level dan Tantangan',
      content: 'Ada lima level yaitu Novabyte, Codewalker, Syntaxion, dll.'
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="game-info-container">
      <div className="logo">
        <img src="/logo.png" alt="logo-img" />
      </div>

      <button className="close-btn-home" onClick={() => navigate('/')}>🏠︎</button>

      <div className="content">
        {sections.map((section, index) => (
          <div
            className={`dropdown-section ${openIndex === index ? 'open' : ''}`}
            key={index}
            onClick={() => handleToggle(index)}
          >
            <div className="dropdown-title">
              {section.title} <span>{openIndex === index ? '▲' : '▼'}</span>
            </div>
            <div className="dropdown-description">
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameInfo;
