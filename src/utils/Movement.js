// utils/Movement.js

export const moveOneStep = (position, direction) => {
  const { row, col } = position;

  switch (direction) {
    case 'SOUTH_EAST': return { row: row + 1, col: col + 1 };
    case 'SOUTH_WEST': return { row: row + 1, col: col - 1 };
    case 'NORTH_EAST': return { row: row - 1, col: col + 1 };
    case 'NORTH_WEST': return { row: row - 1, col: col - 1 };
    default: return position;
  }
};

export const rotateDirection = (current, turn) => {
  const directions = ['NORTH_EAST', 'NORTH_WEST', 'SOUTH_WEST', 'SOUTH_EAST'];
  let index = directions.indexOf(current);

  if (turn === 'left') {
    index = (index + 1) % 4;
  } else if (turn === 'right') {
    index = (index + 3) % 4;
  }

  return directions[index];
};
