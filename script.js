let color = "black";
let mode = "colorMode"
let gridSize = 16

// Initialize Grid
createGrid(gridSize);

//Function Buttons
const functionButtons = document.querySelectorAll(".rightMenu > div:not(.clearMode)");
functionButtons.forEach(button => button.addEventListener("click", selectButton));

const colorButton = document.querySelector(".colorMode");
colorButton.style.backgroundColor = "black";
colorButton.style.color = "white";

//Clear Button
const clearButton = document.querySelector(".clearMode");
clearButton.addEventListener("click", function () {
  createGrid(gridSize)
})


// Slider Functionality
const slider = document.querySelector("#myRange");
const sliderValue = document.querySelector(".sliderValue");
sliderValue.textContent = `${slider.value} x ${slider.value}`;
slider.oninput = function () {
  sliderValue.textContent = `${slider.value} x ${slider.value}`;
  gridSize = slider.value;
  createGrid(gridSize);
}

// Color Picker
const colorPicker = document.querySelector("#colorPicker");
colorPicker.oninput = function () {
  if (mode === "colorMode") {
    color = colorPicker.value;
  }
}


// Function Definitions
function selectButton(e) {
  functionButtons.forEach(button => button.style.backgroundColor = "");
  functionButtons.forEach(button => button.style.color = "black");

  e.target.style.backgroundColor = "black";
  e.target.style.color = "white";
  mode = e.target.className;

  if (mode === "colorMode") {
    color = colorPicker.value;
  }
  else if (mode === "eraserMode") {
    color = "white"
  }
}

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
