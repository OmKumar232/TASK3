let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameOver = false;

function checkWin() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];
  return winPatterns.some(pattern =>
    pattern.every(i => board[i] === currentPlayer)
  );
}

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("click", () => {
    const index = cell.dataset.index;
    if (!board[index] && !isGameOver) {
      board[index] = currentPlayer;
      cell.textContent = currentPlayer;
      if (checkWin()) {
        alert('${currentPlayer} wins!');
        isGameOver = true;
      } else if (!board.includes("")) {
        alert("It's a draw!");
        isGameOver = true;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
});

document.getElementById("reset").addEventListener("click", () => {
  board.fill("");
  currentPlayer = "X";
  isGameOver = false;
  document.querySelectorAll(".cell").forEach(cell => (cell.textContent = ""));
});