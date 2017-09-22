let gameCells = createGameBoard();

// loop through turns
let gameWon = false;
let isXTurn = true;
// while(!gameWon) {
//   if(gameWon) {
//     // do stuff
//     break;
//   }
// }

function createGameBoard() {
  let table = document.querySelector('.game-board');

  for(let i = 0; i < 3; i++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    for(let j = 0; j < 3; j++) {
      let td = document.createElement('td');
      tr.appendChild(td);
      td.innerText = 'x';
      td.setAttribute('class', 'game-cell');
    }
  }
  return [...table.querySelectorAll('.game-cell')];
}

function addCellListeners(table) {

}

function isGameWon(table) {

  return false;
}
