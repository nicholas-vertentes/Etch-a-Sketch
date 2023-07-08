let gridDimension = 16

createGrid(gridDimension)

function createGrid(gridHeight) {

  const grid = document.querySelector(".grid");
  grid.innerHTML = "";

  for (let i = 0; i < (gridHeight * gridHeight); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.style.height = `${100 / gridHeight}%`
    gridSquare.style.width = `${100 / gridHeight}%`
    grid.appendChild(gridSquare);
  }
}

