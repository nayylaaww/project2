import React from 'react';
import './GameSlidebar.css';

const instructions = ['Berjalan maju ↑', 'Melompat ⤒', 'Power ⚠︎'];

const GameSlidebar = ({ isOpen, onClose }) => {
  const handleDragStart = (e, instruction) => {
    e.dataTransfer.setData('text/plain', instruction);
  };

  return (
    <div className={`game-slidebar-fixed ${isOpen ? 'open' : ''}`}>
      <div className="wrapper">
        <h2 className="in">INSTRUKSI</h2>
      </div>

      <div className="garis-hor"></div>
      <div className="instructions-wrapper">
        <div className="instructions-bg">
          
          {instructions.map((instr, index) => (
            <div
              key={index}
              className="instruction-item"
              draggable
              onDragStart={(e) => handleDragStart(e, instr)}
              style={{
                position: 'absolute',
                top: `${20 + index * 60}px`,
                left: '24px',
              }}
            >
              {instr}
            </div>
          ))}
          
        </div>
      </div>

       <div className="garis-hor2"></div>

      <div className="program-section">
  <h2 className="program-title">PROGRAM</h2>
  <div
    className="program-dropzone"
    onDragOver={(e) => e.preventDefault()}
    onDrop={(e) => {
      const droppedInstr = e.dataTransfer.getData('text/plain');
      const container = document.createElement('div');
      container.className = 'dropped-instruction';
      container.textContent = droppedInstr;
      e.target.appendChild(container);
    }}
  ></div>
</div>

    </div>
  );
};

export default GameSlidebar;
