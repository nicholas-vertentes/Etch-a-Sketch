let gridDimension = 6;
let color = "black";

createGrid(gridDimension);

const gridSquares = document.querySelectorAll(".grid > div");
gridSquares.forEach(gridSquare => gridSquare.ondragstart = () => {
  return false;
});
gridSquares.forEach(gridSquare => gridSquare.addEventListener("mousedown", colorSquare));

window.addEventListener("mousedown", function () {
  gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", colorSquare));
});
window.addEventListener("mouseup", function () {
  gridSquares.forEach(gridSquare => gridSquare.removeEventListener("mouseover", colorSquare));
});


// const grid = document.querySelector(".grid");
// grid.addEventListener("mousedown", function () {
//   const gridSquares = document.querySelectorAll(".grid > div");
//   gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", colorSquare));
// });
// grid.addEventListener("mouseup", function () {
//   const gridSquares = document.querySelectorAll(".grid > div");
//   gridSquares.forEach(gridSquare => gridSquare.removeEventListener("mouseover", colorSquare));
// });


// const gridSquares = document.querySelectorAll(".grid > div");
// gridSquares.forEach(gridSquare => gridSquare.addEventListener("mouseover", colorSquare));


function colorSquare(e) {
  e.target.style.backgroundColor = color
}

// Function Definitions
function createGrid(gridHeight) {

  const grid = document.querySelector(".grid");
  grid.innerHTML = "";

  for (let i = 0; i < (gridHeight * gridHeight); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.style.height = `${100 / gridHeight}%`;
    gridSquare.style.width = `${100 / gridHeight}%`;
    grid.appendChild(gridSquare);
  }
}

