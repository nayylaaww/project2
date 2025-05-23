import React, { useState } from 'react';
import './Game.css';
import { useNavigate } from 'react-router-dom';
import GameNavbar from '../components/GameNavbar';
import GameSlidebar from '../components/GameSlidebar';
import GameGrid from '../components/GameGrid';
import { moveOneStep, rotateDirection } from '../utils/Movement';

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

  const [facing, setFacing] = useState("SELATAN_TIMUR"); // default arah hadap
  // 🧹 Clear Program
  const handleClearProgram = () => {
    setProgramList([]);
  };

const movePlayer = () => {
  const newPos = moveOneStep(playerPosition, facing);
  const { row, col } = newPos;

  if (
    row >= 0 &&
    row < map.length &&
    col >= 0 &&
    col < map[0].length &&
    map[row][col] !== 1
  ) {
    setPlayerPosition(newPos);
  }
};

const arahPutar = ['UTARA_TIMUR', 'UTARA_BARAT', 'SELATAN_BARAT', 'SELATAN_TIMUR'];

const rotateDirection = (current, turn) => {
  let index = arahPutar.indexOf(current);
  if (turn === 'left') index = (index + 1) % 4;
  else if (turn === 'right') index = (index + 3) % 4;
  return arahPutar[index];
};



const rotateLeft = () => {
  setFacing((prev) => rotateDirection(prev, "left"));
};

const rotateRight = () => {
  setFacing((prev) => rotateDirection(prev, "right"));
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

const handleSingleInstruction = (command) => {
  if (command.includes('maju')) {
    movePlayer(); // ✅ cukup panggil tanpa parameter
  } else if (command.includes('kiri')) {
    setFacing((prev) => rotateDirection(prev, 'left')); // ✅ update facing pakai setState
  } else if (command.includes('kanan')) {
    setFacing((prev) => rotateDirection(prev, 'right')); // ✅ sama
  } else if (command.includes('lompat')) {
    movePlayer(); // 🟡 sementara pakai move biasa (bisa ditambah logika lompatan nanti)
  } else if (command.includes('Power')) {
    activateLight();
  }
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
        facing={facing}
      />

      </div>
    </div>
  );
};

export default Game;
