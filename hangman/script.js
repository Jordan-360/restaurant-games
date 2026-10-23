const wordDisplay = document.getElementById("wordDisplay");
const lettersButton = document.getElementById("lettersButton");
const attemptsText = document.getElementById("attemptsLeft");
const resetButton = document.getElementById("resetButton");
const figureParts = document.querySelectorAll("#figure .part");
const MAX_ATTEMPTS = 6;
const DICTIONARY = [
  "cat",
  "dog",
  "cow",
  "pig",
  "fox",
  "owl",
  "bee",
  "ant",
  "bat",
  "hen",
  "duck",
  "frog",
  "fish",
  "bear",
  "lion",
  "goat",
  "deer",
  "seal",
  "crab",
  "swan",
  "wolf",
  "mouse",
  "horse",
  "sheep",
  "zebra",
  "tiger",
  "panda",
  "koala",
  "whale",
  "shark",
  "snake",
  "bunny",
  "puppy",
  "kitten",
  "monkey",
  "turtle",
  "rabbit",
  "parrot",
  "apple",
  "pear",
  "plum",
  "grape",
  "lemon",
  "melon",
  "peach",
  "berry",
  "banana",
  "cake",
  "pie",
  "cookie",
  "pizza",
  "bread",
  "milk",
  "egg",
  "corn",
  "rice",
  "soup",
  "taco",
  "juice",
  "candy",
  "honey",
  "cheese",
  "ball",
  "book",
  "doll",
  "kite",
  "drum",
  "bike",
  "boat",
  "car",
  "bus",
  "train",
  "truck",
  "plane",
  "hat",
  "sock",
  "shoe",
  "bed",
  "cup",
  "spoon",
  "chair",
  "house",
  "sun",
  "moon",
  "star",
  "tree",
  "rain",
  "snow",
  "cloud",
  "leaf",
  "rock",
  "sand",
  "flower",
  "rainbow",
  "smile",
  "happy",
  "dance",
  "song",
  "party",
  "friend",
];

let secretWord = "";
let guessedLetters = [];
let attemptsLeft = MAX_ATTEMPTS;

function grabRandomWord() {
  const randomIndex = Math.floor(Math.random() * DICTIONARY.length);
  return DICTIONARY[randomIndex];
}

function showWord() {
  wordDisplay.innerHTML = "";

  for (const letter of secretWord) {
    const span = document.createElement("span");
    span.classList.add("letter");

    if (guessedLetters.includes(letter)) {
      span.textContent = letter;
    }

    wordDisplay.appendChild(span);
  }
}

function showFigure() {
  const wrongGuesses = MAX_ATTEMPTS - attemptsLeft;

  figureParts.forEach((part, index) => {
    part.classList.toggle("show", index < wrongGuesses);
  });
}

function createLetterButtons() {
  lettersButton.innerHTML = "";

  for (const letter of "abcdefghijklmnopqrstuvwxyz") {
    const button = document.createElement("button");
    button.classList.add("letter-btn");
    button.textContent = letter;
    button.addEventListener("click", () => handleGuess(letter, button));
    lettersButton.appendChild(button);
  }
}

function handleGuess(letter, button) {
  button.disabled = true;
  guessedLetters.push(letter);

  if (secretWord.includes(letter)) {
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
    attemptsLeft--;
  }

  showWord();
  showFigure();
  attemptsText.textContent = `Attempts left: ${attemptsLeft}`;
  checkGameOver();
}

function checkGameOver() {
  const wordGuessed = [...secretWord].every((letter) =>
    guessedLetters.includes(letter),
  );

  if (wordGuessed) {
    attemptsText.textContent = "You got it! 🎉";
    disableAllButtons();
  } else if (attemptsLeft === 0) {
    attemptsText.textContent = `Out of attempts! The word was ${secretWord.toUpperCase()}.`;
    disableAllButtons();
  }
}

function disableAllButtons() {
  const buttons = lettersButton.querySelectorAll(".letter-btn");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

function startGame() {
  secretWord = grabRandomWord();
  guessedLetters = [];
  attemptsLeft = MAX_ATTEMPTS;

  showWord();
  showFigure();
  createLetterButtons();
  attemptsText.textContent = `Attempts left: ${attemptsLeft}`;
}

resetButton.addEventListener("click", startGame);

startGame();
