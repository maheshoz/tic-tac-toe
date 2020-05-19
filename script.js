// constant variables
const STARTED = 0;
const ENDED = 1;
// html dom elements
const playerSpan = document.getElementById('player')
const gameTable = document.getElementById('game')

const game = {
    state: STARTED,
    turn: 'X',
    move: 0
}

function nextTurn() {
    game.move++;
    if(game.turn === 'X') game.turn = 'O'
    else game.turn = 'X'

    if(game.move == 9) {
        alert('Game over')
    }
    playerSpan.textConent = game.turn
}

function isRowCaptured(row) {
    let tableRow = Array.from(gameTable.children[0].children[row-1].children)
    let winningCombo = game.turn + game.turn + game.turn;

    isSeqCaptured(tableRow)
}

function isColCaptured(col) {
    let tableCol = [
        gameTable.children[0].children[0].children[col-1],
        gameTable.children[0].children[1].children[col-1],
        gameTable.children[0].children[2].children[col-1],
    ];
    
    isSeqCaptured(tableCol)
}

function isSeqCaptured(arrayOf3Cells) {
    let winningCombo = game.turn + game.turn + game.turn;
    if (arrayOf3Cells.map((td) => td.textContent).join("") === winningCombo) {
      alert("Game over | Winner is Player " + game.turn);
    }
}

function isDiagonalCaptured(row, col) {
    if(row!==col && (row+col !== 4) ) return

    let diag1 = [
        gameTable.children[0].children[0].children[0],
        gameTable.children[0].children[1].children[1],
        gameTable.children[0].children[2].children[2],
    ];
    let diag2 = [
      gameTable.children[0].children[0].children[2],
      gameTable.children[0].children[1].children[2],
      gameTable.children[0].children[2].children[0],
    ];
    isSeqCaptured(diag1)
    isSeqCaptured(diag2)
}

function boxClicked(row, col) {
    console.log(`box clicked :`, row, col)
    
    let clickedBox = gameTable.children[0].children[row-1].children[col-1];
    clickedBox.textContent = game.turn;
    isRowCaptured(row);
    isColCaptured(col);

    nextTurn()
}
