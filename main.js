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

function addHover(isRainbow = false) {
  const squares = document.querySelectorAll('.col');
  squares.forEach((square) => {
    square.removeEventListener('mouseover', changeColour);
    square.rainbow = isRainbow;
    square.addEventListener('mouseover', changeColour);
  });
}

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

function multiColor() {
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
}

initializeGrid();
const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', multiColor);

const gridBtn = document.querySelector('.change-grid');
gridBtn.addEventListener('click', changeGrid);

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGrid);
