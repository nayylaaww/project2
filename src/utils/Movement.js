export const directions = {
  NORTH_EAST: { row: -1, col: 1 },
  SOUTH_EAST: { row: 1, col: 1 },
  SOUTH_WEST: { row: 1, col: -1 },
  NORTH_WEST: { row: -1, col: -1 },
};

export function moveOneStep(position, facing) {
  const dir = directions[facing];
  return {
    row: position.row + dir.row,
    col: position.col + dir.col,
  };
}

export function rotateDirection(currentFacing, direction) {
  const facingOrder = ["NORTH_EAST", "SOUTH_EAST", "SOUTH_WEST", "NORTH_WEST"];
  const currentIndex = facingOrder.indexOf(currentFacing);

  const newIndex =
    direction === "left"
      ? (currentIndex + 3) % 4
      : (currentIndex + 1) % 4;

  return facingOrder[newIndex];
}
