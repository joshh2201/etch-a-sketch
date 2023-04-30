function initializeGrid() {
  const container = document.querySelector('.container');
  for (let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    for (let i = 0; i < 16; i++) {
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
  console.log(e.currentTarget.rainbow);
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

initializeGrid();
const rainbowBtn = document.querySelector('.rainbow');
rainbowBtn.addEventListener('click', multiColor);
