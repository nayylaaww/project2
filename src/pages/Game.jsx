import React, { useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import GameNavbar from '../components/GameNavbar';
import GameSlidebar from '../components/GameSlidebar';
import GameGrid from '../components/GameGrid';

const initialMap = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0], 
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 2, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

const Game = () => {
  const navigate = useNavigate();
  const [slideOpen, setSlideOpen] = useState(true);
  const [map, setMap] = useState(initialMap);
  const [playerPosition, setPlayerPosition] = useState({ row: 0, col: 0 });
  const [programList, setProgramList] = useState([]);

  const handleClearProgram = () => {
    setProgramList([]);
  };

  const movePlayer = (direction) => {
    const { row, col } = playerPosition;
    let newRow = row;
    let newCol = col;

    if (direction === 'up') newRow--;
    if (direction === 'down') newRow++;
    if (direction === 'left') newCol--;
    if (direction === 'right') newCol++;

    if (
      newRow >= 0 &&
      newRow < map.length &&
      newCol >= 0 &&
      newCol < map[0].length &&
      map[newRow][newCol] !== 1
    ) {
      setPlayerPosition({ row: newRow, col: newCol });
    }
  };

  const activateLight = () => {
    const { row, col } = playerPosition;
    if (map[row][col] === 2) {
      const updatedMap = map.map((r, rIdx) =>
        r.map((tile, cIdx) => (rIdx === row && cIdx === col ? 3 : tile))
      );
      setMap(updatedMap);
    } else if (map[row][col] === 3) {
      const updatedMap = map.map((r, rIdx) =>
        r.map((tile, cIdx) => (rIdx === row && cIdx === col ? 2 : tile))
      );
      setMap(updatedMap);
    }
  };

  const runProgram = () => {
  let delay = 0;

  const executeInstruction = (instr, index) => {
    if (instr.type === 'instruction') {
      setTimeout(() => {
        handleSingleInstruction(instr.value);
      }, delay);
      delay += 500; // jeda 0.5 detik antar instruksi
    } else if (instr.type === 'repeat') {
      for (let i = 0; i < instr.count; i++) {
        instr.children.forEach((child) => {
          setTimeout(() => {
            handleSingleInstruction(child.value);
          }, delay);
          delay += 500;
        });
      }
    }
  };

  programList.forEach((instr, index) => {
    executeInstruction(instr, index);
  });
};

const handleSingleInstruction = (command) => {
  switch (command) {
    case 'Berjalan maju ↑':
      movePlayer('up');
      break;
    case 'Melompat ⤒':
      movePlayer('up'); // nanti bisa diganti logic lompat
      break;
    case 'Putar ke kiri ↶':
      // belum ada arah, bisa ditambahkan nanti
      break;
    case 'Putar ke kanan ↷':
      // belum ada arah, bisa ditambahkan nanti
      break;
    case 'Power ⚠︎':
      activateLight();
      break;
    default:
      break;
  }
};

const handleRunProgram = async () => {
  for (let i = 0; i < programList.length; i++) {
    const instr = programList[i];

    if (instr.type === 'instruction') {
      if (instr.value.includes('maju')) {
        movePlayer('down'); 
      } else if (instr.value.includes('kanan')) {
        movePlayer('right');
      } else if (instr.value.includes('kiri')) {
        movePlayer('left');
      } else if (instr.value.includes('lompat')) {
        movePlayer('up');
      } else if (instr.value.includes('Power')) {
        activateLight();
      }
    }

    await new Promise(resolve => setTimeout(resolve, 500)); // jeda antar perintah
  }
};



  return (
    <div className="bege" style={{ backgroundImage: `url('/bg-game.jpg')` }}>
      <div className="game-container">
        <GameNavbar onClear={handleClearProgram} onRun={handleRunProgram} />
        <GameSlidebar
          isOpen={slideOpen}
          onClose={() => setSlideOpen(false)}
          programList={programList}
          setProgramList={setProgramList}
        />
        <GameGrid map={map} playerPosition={playerPosition} />
      </div>
    </div>
  );
};

export default Game;
