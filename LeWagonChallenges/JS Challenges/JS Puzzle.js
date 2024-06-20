// Select all the tiles
const tiles = document.querySelectorAll('td');

const canMove = (tile) => {
  const emptyTile = document.querySelector('.empty');
  const cellPos = tile.cellIndex;
  const rowPos = tile.parentNode.rowIndex;
  const emptyCellPos = emptyTile.cellIndex;
  const emptyRowPos = emptyTile.parentNode.rowIndex;
  const cellDiff = Math.abs(cellPos - emptyCellPos);
  const rowDiff = Math.abs(rowPos - emptyRowPos);
  const result = (cellDiff === 1 && rowDiff === 0) || (cellDiff === 0 && rowDiff === 1);
  return result;
};

const moveTile = (element) => {
  // TOOD: Move the tile
  const emptyTile = document.querySelector('.empty');
  emptyTile.innerText = element.innerText;
  emptyTile.classList.remove('empty');
  element.classList.add('empty');
  element.innerText = "";
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
  const arrayWin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, NaN];
  const array = [];
  tiles.forEach((tile) => {
    array.push(parseInt(tile.innerText, 10));
  });
  console.log(array.toString());
  console.log(arrayWin.toString());
  if (array.toString() === arrayWin.toString()) {
    alert('Congrats ! You solved this puzzle :) ');
  }
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
