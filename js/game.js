const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  attempts++;

  if (guess < 1 || guess > 100) {
    message.textContent = "🚫 Please enter a number between 1 and 100.";
  } else if (guess === secretNumber) {
    message.textContent = `🎉 You got it in ${attempts} attempts! The number was ${secretNumber}.`;
  } else if (guess < secretNumber) {
    message.textContent = "📈 Too low! Try again.";
  } else if (guess > secretNumber) {
    message.textContent = "📉 Too high! Try again.";
  }
}
