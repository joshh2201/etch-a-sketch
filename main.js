function initializeGrid(n = 16) {
  const container = document.querySelector('.container');
  for (let i = 0; i < n; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < n; i++) {
      let col = document.createElement('div');
      col.classList.add('col');
      row.appendChild(col);
    }
    container.appendChild(row);
  }
  addHover();
}

function changeColour(e) {
  let rgbStr = '';
  if (e.currentTarget.rainbow) {
    rgbStr = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
  } else {
    rgbStr = 'rgb(0,0,0)';
  }
  this.style.background = rgbStr;
}

function addHover(isRainbow = false, isShade = false) {
  const squares = document.querySelectorAll('.col');
  let colorCallback = changeColour;
  if (isShade) {
    colorCallback = shadeSquares;
  }
  squares.forEach((square) => {
    square.removeEventListener('mouseover', changeColour);
    square.removeEventListener('mouseover', shadeSquares);
    square.rainbow = isRainbow;
    square.addEventListener('mouseover', colorCallback);
  });
}

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

function colorCallback() {
  resetGrid();
  addHover(true);
}

function changeGrid() {
  let newSize = 0;
  while (!newSize || newSize <= 0 || newSize > 100) {
    newSize = parseInt(
      prompt('Enter the new number of squares in a row (max 100): ')
    );
  }
  const container = document.querySelector('.container');
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
  initializeGrid(newSize);
}

function resetGrid() {
  const squares = document.querySelectorAll('.col');
  squares.forEach((square) => {
    square.style.background = 'white';
  });
  addHover();
}

function shadeSquares() {
  let background = this.style.background;
  if (background === 'white') {
    this.style.background = 'rgba(0,0,0,0.1)';
  } else {
    console.log(background);
    let rgb = background.match(/[.?\d]+/g);
    console.log(rgb[rgb.length - 1]);
    let alpha = parseFloat(rgb[rgb.length - 1]);
    if (alpha) {
      this.style.background = `rgba(0,0,0,${alpha + 0.1})`;
    }
  }
}

function shadeCallback() {
  resetGrid();
  addHover(false, true);
}

initializeGrid();
const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', colorCallback);

const gridBtn = document.querySelector('.change-grid');
gridBtn.addEventListener('click', changeGrid);

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGrid);

const shadeBtn = document.querySelector('.shading');
shadeBtn.addEventListener('click', shadeCallback);
