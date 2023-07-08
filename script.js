let gridDimension = 1

const grid = document.querySelector(".grid");

for (let i = 0; i < (gridDimension * gridDimension); i++){
  const gridSquare = document.createElement('div');
  grid.appendChild(gridSquare);
}