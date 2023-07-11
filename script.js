let color = "black";

// Initialize Grid
createGrid(16);


// Slider Functionality
const slider = document.querySelector("#myRange");
const sliderValue = document.querySelector(".sliderValue");
sliderValue.textContent = `${ slider.value } x ${slider.value}`
slider.oninput = function () {
  sliderValue.textContent = `${slider.value} x ${slider.value}`
  createGrid(slider.value);
}


// Function Definitions

function colorSquare(e) {
  e.target.style.backgroundColor = color
}

function createGrid(gridHeight) {

  const grid = document.querySelector(".grid");
  grid.innerHTML = "";

  // Create Squares
  for (let i = 0; i < (gridHeight * gridHeight); i++) {
    const gridSquare = document.createElement('div');
    gridSquare.style.backgroundColor = "white";
    gridSquare.style.height = `${100 / gridHeight}%`;
    gridSquare.style.width = `${100 / gridHeight}%`;
    grid.appendChild(gridSquare);
  }

  // Drawing Functionality
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
  window.ondragstart = () => {
    return false;
  }
}




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
