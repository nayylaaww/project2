import React, { useState } from 'react';
import './GameSlidebar.css';

const instructions = [
  'Berjalan maju ↑',
  'Melompat ⤒',
  'Putar ke kiri ↶',
  'Putar ke kanan ↷',
  'Power ⚠︎',
];

const GameSlidebar = ({ isOpen, onClose }) => {
  const handleDragStart = (e, instruction) => {
    e.dataTransfer.setData('text/plain', instruction);
  };

  const RepeatBlock = () => {
    const [count, setCount] = useState(2);

    const handleDragStartRepeat = (e) => {
      e.dataTransfer.setData('text/plain', `Mengulang ${count} instruksi`);
    };

    return (
      <div
        className="instruction-item"
        draggable
        onDragStart={handleDragStartRepeat}
        style={{ position: 'absolute', top: `${20 + instructions.length * 60}px`, left: '24px' }}
      >
        Mengulang{' '}
        <input
          type="number"
          min="1"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          style={{ width: '40px', margin: '0 5px' }}
        />{' '}
        instruksi
      </div>
    );
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

          <RepeatBlock />
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
