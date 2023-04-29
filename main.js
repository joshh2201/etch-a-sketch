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
}

initializeGrid();
