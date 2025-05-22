import React, { useEffect, useState } from 'react';
import './Character.css';

const SPRITE_WIDTH = 128;
const SPRITE_HEIGHT = 66;
const FRAME_DURATION = 200; 

const actionFrames = {
  idle: { start: 0, end: 0, row: 0 },         // frame ke-1 (kolom 0, row 0)
  walk: { start: 1, end: 3, row: 0 },         // frame ke-2 s/d 4 (row 0)
  jump: { start: 0, end: 1, row: 1 },         // frame 1–2 di row ke-1 (index 1)
  power: { start: 3, end: 4, row: 1 },        // frame 4–5 di row ke-1
};


const Character = ({ action = 'idle', x = 0, y = 0 }) => {
  const [frame, setFrame] = useState(actionFrames[action].start);

  useEffect(() => {
    const { start, end } = actionFrames[action];
    let current = start;
    const interval = setInterval(() => {
      current = current >= end ? start : current + 1;
      setFrame(current);
    }, FRAME_DURATION);

    return () => clearInterval(interval);
  }, [action]);

  const { row } = actionFrames[action];
  const backgroundX = -frame * SPRITE_WIDTH;
  const backgroundY = -row * SPRITE_HEIGHT;

  return (
        <div
        className={`character ${action}`}
        style={{
            left: `${x}px`,
            top: `${y}px`,
            backgroundPosition: `${backgroundX}px ${backgroundY}px`
        }}
    />
  );
};

export default Character;
