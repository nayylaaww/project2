import React, { useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import GameNavbar from '../components/GameNavbar';
import GameSlidebar from '../components/GameSlidebar';
import GameGrid from '../components/GameGrid';
import { moveOneStep, rotateDirection } from '../utils/Movement';

const [facing, setFacing] = useState("SOUTH_EAST"); // default arah hadap


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
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // 🧹 Clear Program
  const handleClearProgram = () => {
    setProgramList([]);
  };

const movePlayer = (direction) => {
  const { row, col } = playerPosition;
  let newRow = row;
  let newCol = col;

  switch (direction) {
    case 'forward':
      newRow += 1;
      newCol += 1;
      break;
    case 'left':
      newRow += 1;
      newCol -= 1;
      break;
    case 'right':
      newRow -= 1;
      newCol += 1;
      break;
    case 'backward':
      newRow -= 1;
      newCol -= 1;
      break;
    default:
      break;
  }

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




  // 💡 Nyalakan atau matikan lampu
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

  // 🧠 Jalankan 1 instruksi
const handleSingleInstruction = (command) => {
  if (command.includes('maju')) movePlayer('forward');
  else if (command.includes('kanan')) movePlayer('up-right');
  else if (command.includes('kiri')) movePlayer('down-left');
  else if (command.includes('lompat')) movePlayer('up-left'); // bisa diubah
  else if (command.includes('Power')) activateLight();
};


  // ▶ Jalankan seluruh program
  const runProgram = () => {
    let delay = 0;

    const executeInstruction = (instr) => {
      if (instr.type === 'instruction') {
        setTimeout(() => {
          handleSingleInstruction(instr.value);
        }, delay);
        delay += 600;
      } else if (instr.type === 'repeat') {
        for (let i = 0; i < instr.count; i++) {
          instr.children.forEach((child) => {
            setTimeout(() => {
              handleSingleInstruction(child.value);
            }, delay);
            delay += 600;
          });
        }
      }
    };

    programList.forEach(executeInstruction);

    const totalTime = delay + 200;
    const timer = setTimeout(() => setIsRunning(false), totalTime);
    setIntervalId(timer);
  };

  const stopProgram = () => {
    clearTimeout(intervalId);
    setIsRunning(false);
  };

  const handleToggleRun = () => {
    if (!isRunning) runProgram();
    else stopProgram();
    setIsRunning(!isRunning);
  };

  return (
    <div className="bege" style={{ backgroundImage: `url('/bg-game.jpg')` }}>
      <div className="game-container">
        <GameNavbar
          onClear={handleClearProgram}
          isRunning={isRunning}
          onToggleRun={handleToggleRun}
        />

        <GameSlidebar
          isOpen={slideOpen}
          onClose={() => setSlideOpen(false)}
          programList={programList}
          setProgramList={setProgramList}
        />

       <GameGrid 
        map={map} 
        playerPosition={playerPosition}
        isRunning={isRunning}
      />

      </div>
    </div>
  );
};

export default Game;
