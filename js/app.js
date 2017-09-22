let gameCells = [];
let turns = 0;
createGameBoard();

// loop through turns
let isXTurn = true;
setTurnHeading();

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
  let win = false;
  [
    [[0,0], [1,0], [2,0]],
    [[0,0], [0,1], [1,2]],
    [[0,0], [1,1], [2,2]],
    [[1,0], [1,1], [1,2]],
    [[2,0], [2,1], [2,2]],
    [[2,0], [1,1], [0,2]],
    [[0,1], [1,1], [2,1]],
    [[0,2], [1,2], [2,2]]
  ].forEach(con => {
    if(checkWinCondition(con)) {
      win = true;
      return;
    }
  });
  return win;
}

function checkWinCondition(condition) {
  let isWinning = true;
  condition.forEach(coord => {
    if(gameCells[coord[0]][coord[1]].innerText !== (isXTurn ? 'x' : 'o')) {
      isWinning = false;
      return;
    }
  });

  return isWinning;
}

function setTurnHeading(s='') {
  setTimeout(() => {
    document.querySelector('.whose-turn').innerText = s || `Turn: ${isXTurn ? 'x' : 'o'}`;
  }, 200);
}

// callbacks
function playTurn(e) {
  let token = isXTurn ? 'x' : 'o';

  turns++;
  this.innerText = token;
  this.removeEventListener('click', playTurn);

  if(isGameWon()) {
    setTurnHeading(`${token} wins! Reset to play again!`);
  } else if(turns == 9) {
    setTurnHeading('Draw! Reset to play again!');
  } else {
    isXTurn = !isXTurn;
    setTurnHeading();
  }
}

function resetBoard() {
  let table = document.querySelector('.game-board');
  table.removeChild(table.children[0]);
  gameCells = [];
  isXTurn = true;
  turns = 0;
  setTurnHeading();
  createGameBoard();
}
