let gameCells = [];
createGameBoard();

// loop through turns
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
    gameCells.push([]);
    for(let j = 0; j < 3; j++) {
      let td = document.createElement('td');
      gameCells[gameCells.length-1].push(td);
      tr.appendChild(td);
      td.innerText = '';
      td.setAttribute('class', 'game-cell');

      td.addEventListener('click', playTurn);
    }
  }
}

function isGameWon() {
  [
    [0,0, 1,0, 2,0]
    [0,0, 0,1, 1,2],
    [0,0, 1,1, 2,2],
    [1,0, 1,1, 1,2],
    [2,0, 2,1, 2,2],
    [2,0, 1,1, 0,2],
    [0,1, 1,1, 2,1],
    [0,2, 1,2, 2,2]
  ].forEach(con => {
    if(checkWinCondition(con)) {
      return true;
    }
  });
  return false;
}

function checkWinCondition(ar) {
  for(let i = 0; i < ar.length; i+=2) {
    let coord = ar.slice(i,i+1);
    if(gameCells[coord[0]*coord[1]] !== (isXTurn ? 'x' : 'o')) {
      return false;
    }
  }
  return true;
}

// callbacks
function playTurn(e) {
  let token = isXTurn ? 'x' : 'o';

  this.innerText = token;
  this.removeEventListener('click', playTurn);
  if(isGameWon()) {
    alert(`${token} wins!`);
  }

  isXTurn = !isXTurn;
}

function resetBoard() {
  let table = document.querySelector('.game-board');
  table.removeChild(table.children[0]);
  gameCells = createGameBoard();
}
