const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
let turn = 'X';
let board = Array(9).fill("");
cells.forEach((cell, index) => {
  cell.addEventListener('click', () => {
    if (cell.textContent === "" && !checkWinner()) {
      cell.textContent = turn;
      board[index] = turn;
      if (checkWinner()) {
        message.textContent = `Player ${turn} wins!`;
      } else if (!board.includes("")) {
        message.textContent = "It's a draw!";
      } else {
        turn = turn === 'X' ? 'O' : 'X';
        message.textContent = `Player ${turn}'s turn`;
      }
    }
  });
});
function checkWinner() {
  const win = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return win.some(([a,b,c]) => 
    board[a] && board[a] === board[b] && board[a] === board[c]
  );
}
function resetGame() {
  board = Array(9).fill("");
  turn = 'X';
  cells.forEach(cell => cell.textContent = "");
  message.textContent = "Player X's turn";
}
