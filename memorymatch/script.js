const PAIR_COUNT = 15;
const FLIP_BACK_DELAY = 1000;
const EMOJIS = [
  "🐶",
  "🐱",
  "🐭",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐙",
  "🦄",
  "🐝",
  "🐢",
];

const gameBoard = document.getElementById("gameBoard");
const restartButton = document.getElementById("restartBoard");
const statusText = document.getElementById("status");
const cardEmojis = new Map();

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let pairsFound = 0;
let moves = 0;
let flipBackTimer = null;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck() {
  const picked = shuffle(EMOJIS).slice(0, PAIR_COUNT);
  return shuffle([...picked, ...picked]);
}

function createBoard() {
  gameBoard.innerHTML = "";
  cardEmojis.clear();

  for (const emoji of buildDeck()) {
    const card = document.createElement("button");
    card.classList.add("card");
    cardEmojis.set(card, emoji);
    card.addEventListener("click", () => flipCard(card));
    gameBoard.appendChild(card);
  }
}

function flipCard(card) {
  if (lockBoard) return;
  if (card === firstCard) return;
  if (card.classList.contains("matched")) return;

  card.classList.add("flipped");
  card.textContent = cardEmojis.get(card);

  if (firstCard === null) {
    firstCard = card;
    return;
  }

  secondCard = card;
  moves++;
  checkForMatch();
}

function checkForMatch() {
  const isMatch = cardEmojis.get(firstCard) === cardEmojis.get(secondCard);

  if (isMatch) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    pairsFound++;
    resetTurn();
    updateStatus();
    return;
  }

  lockBoard = true;
  updateStatus();

  flipBackTimer = setTimeout(() => {
    hideCard(firstCard);
    hideCard(secondCard);
    resetTurn();
  }, FLIP_BACK_DELAY);
}

function hideCard(card) {
  card.classList.remove("flipped");
  card.textContent = "";
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function updateStatus() {
  if (pairsFound === PAIR_COUNT) {
    statusText.textContent = `You found all ${PAIR_COUNT} pairs in ${moves} moves! 🎉`;
    return;
  }

  statusText.textContent = `Pairs: ${pairsFound} of ${PAIR_COUNT} · Moves: ${moves}`;
}

function startGame() {
  clearTimeout(flipBackTimer);
  resetTurn();
  pairsFound = 0;
  moves = 0;

  createBoard();
  updateStatus();
}

restartButton.addEventListener("click", startGame);

startGame();
