import React, { useEffect, useState } from 'react';
import './Character.css';

const SPRITE_WIDTH = 128;
const SPRITE_HEIGHT = 80;
const FRAME_DURATION = 200; 

const actionFrames = {
  // Menghadap SELATAN TIMUR (baris 0)
  idle_SELATAN_TIMUR:     { start: 0, end: 0, row: 0 },
  jalan_SELATAN_TIMUR:    { start: 1, end: 3, row: 0 },
  lompat_SELATAN_TIMUR:   { start: 4, end: 5, row: 0 },
  power_SELATAN_TIMUR:    { start: 6, end: 7, row: 0 },

  // Menghadap SELATAN BARAT (baris 1, 2, 3 itu sama)
  idle_SELATAN_BARAT:     { start: 0, end: 0, row: 1 },
  jalan_SELATAN_BARAT:    { start: 1, end: 3, row: 1 },
  lompat_SELATAN_BARAT:   { start: 4, end: 5, row: 1 },
  power_SELATAN_BARAT:    { start: 6, end: 7, row: 1 },
};



const directionRow = {
  'SELATAN_TIMUR': 0,
  'SELATAN_BARAT': 1,
  'UTARA_BARAT': 2,
  'UTARA_TIMUR': 3,
};


const Character = ({ action = 'idle', x = 0, y = 0, facing = 'SOUTH_EAST' }) => {
  const [frame, setFrame] = useState(actionFrames[action].start);

useEffect(() => {
  const { start, end } = actionFrames[action];
  if (start === end) {
    setFrame(start); // hanya satu frame, tidak ada animasi
    return;
  }

  let current = start;
  const interval = setInterval(() => {
    current = current >= end ? start : current + 1;
    setFrame(current);
  }, FRAME_DURATION);

  return () => clearInterval(interval);
}, [action]);


  const actionRow = actionFrames[action]?.row || 0;
  const facingOffset = directionRow[facing] || 0;
  const row = actionRow + facingOffset;
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
