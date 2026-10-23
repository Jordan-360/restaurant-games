const MAX_ATTEMPTS = 6;
let attemptsLeft = MAX_ATTEMPTS;
const attemptsDisplay = document.getElementById("attemptsLeft");
attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
