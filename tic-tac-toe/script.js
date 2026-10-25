const boxes = document.querySelectorAll(".box");
const statusText = document.querySelector("#status");
const resetBtn = document.querySelector("#reset");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnX = true;
let gameOver = false;

function showTurn() {
  const player = turnX ? "X" : "O";
  statusText.textContent = `${player}'s turn`;
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameOver || box.textContent !== "") return;

    const player = turnX ? "X" : "O";
    box.textContent = player;
    box.classList.add(player.toLowerCase());

    if (checkWinner(player)) return;
    if (checkTie()) return;

    turnX = !turnX;
    showTurn();
  });
});

function checkWinner(player) {
  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      boxes[a].textContent === player &&
      boxes[b].textContent === player &&
      boxes[c].textContent === player
    ) {
      pattern.forEach((i) => boxes[i].classList.add("win"));
      statusText.textContent = `${player} wins! 🎉`;
      gameOver = true;
      return true;
    }
  }
  return false;
}

function checkTie() {
  const allFilled = [...boxes].every((box) => box.textContent !== "");
  if (allFilled) {
    statusText.textContent = "It's a tie!";
    gameOver = true;
    return true;
  }
  return false;
}

function resetGame() {
  boxes.forEach((box) => {
    box.textContent = "";
    box.classList.remove("x", "o", "win");
  });
  turnX = true;
  gameOver = false;
  showTurn();
}

resetBtn.addEventListener("click", resetGame);

showTurn();
