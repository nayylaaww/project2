import React, { useState } from 'react';
import './GameSlidebar.css';

const defaultInstructions = [
  'Berjalan maju ↑',
  'Melompat ⤒',
  'Putar ke kiri ↶',
  'Putar ke kanan ↷',
  'Power ⚠︎',
];

const GameSlidebar = ({ isOpen, onClose }) => {
  const [programList, setProgramList] = useState([]);

  const handleDrop = (e, repeatIndex = null) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('type');
    const value = e.dataTransfer.getData('value');

    if (type === 'repeat') {
      const count = parseInt(value, 10) || 2;
      const newBlock = { type: 'repeat', count, children: [] };
      setProgramList([...programList, newBlock]);
    } else if (type === 'instruction') {
      if (repeatIndex !== null) {
        
        const updatedList = [...programList];
        updatedList[repeatIndex].children.push({ type: 'instruction', value });
        setProgramList(updatedList);
      } else {
      
        setProgramList([...programList, { type: 'instruction', value }]);
      }
    }
  };

  const handleDragStart = (e, type, value) => {
    e.dataTransfer.setData('type', type);
    e.dataTransfer.setData('value', value);
  };

  const handleDelete = (index, nestedIndex = null) => {
    const updatedList = [...programList];
    if (nestedIndex === null) {
      updatedList.splice(index, 1);
    } else {
      updatedList[index].children.splice(nestedIndex, 1);
    }
    setProgramList(updatedList);
  };

  const RepeatBlock = () => {
    const [count, setCount] = useState(2);

    return (
      <div
        className="instruction-item"
        draggable
        onDragStart={(e) => handleDragStart(e, 'repeat', count)}
        style={{ position: 'absolute', top: `${20 + defaultInstructions.length * 60}px`, left: '24px' }}
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
          {defaultInstructions.map((instr, index) => (
            <div
              key={index}
              className="instruction-item"
              draggable
              onDragStart={(e) => handleDragStart(e, 'instruction', instr)}
              style={{ position: 'absolute', top: `${20 + index * 60}px`, left: '24px' }}
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
          onDrop={handleDrop}
        >
          {programList.map((instr, index) => {
            if (instr.type === 'instruction') {
              return (
                <div key={index} className="dropped-instruction">
                  {instr.value}
                  <button className="delete-button" onClick={() => handleDelete(index)}>×</button>
                </div>
              );
            } else if (instr.type === 'repeat') {
              return (
                <div key={index} className="repeat-block">
                  🔁 Mengulang {instr.count}x:
                  <div
                    className="repeat-inner-dropzone"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => handleDrop(e, index)}
                  >
                    {instr.children.map((child, cIndex) => (
                      <div key={cIndex} className="dropped-instruction nested">
                        {child.value}
                        <button className="delete-button" onClick={() => handleDelete(index, cIndex)}>×</button>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default GameSlidebar;
