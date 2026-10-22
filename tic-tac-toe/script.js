const boxes = document.querySelectorAll(".box");
const statusText = document.querySelector("#status");

let turnX = true;

function showTurn() {
  const player = turnX ? "X" : "O";
  statusText.textContent = `${player}'s turn`;
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.textContent !== "") return;

    const player = turnX ? "X" : "O";
    box.textContent = player;
    box.classList.add(player.toLowerCase());
    turnX = !turnX;
    showTurn();
  });
});

showTurn();
