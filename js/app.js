let gameCells = createGameBoard();

// loop through turns
let gameWon = false;
let isXTurn = true;

// make reset button work
document.querySelector('button').addEventListener('click', resetBoard);



// helper functions
function createGameBoard() {
  let table = document.querySelector('.game-board');
  let tbody = document.createElement('tbody');
  table.appendChild(tbody);

  for(let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    tbody.appendChild(tr);
    for(let j = 0; j < 3; j++) {
      let td = document.createElement('td');
      tr.appendChild(td);
      td.innerText = '';
      td.setAttribute('class', 'game-cell');
    }
  }
  return [...table.querySelectorAll('.game-cell')];
}

function addCellListeners(cells) {
  cells.forEach(cell => {
    cell.addEventListener('click', playTurn);
  });
}

function isGameWon(table) {

  return false;
}


// callbacks
function playTurn(e) {
  let token = isXTurn ? 'x' : 'o';
  this.innerText = token;
}

function resetBoard() {
  let table = document.querySelector('.game-board');
  table.removeChild(table.children[0]);
  gameCells = createGameBoard();
}
