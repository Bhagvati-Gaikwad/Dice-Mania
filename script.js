let score1 = 0;
let score2 = 0;
let round = 0;
const maxRounds = 10;

function rollTheDice() {
  // Roll dice for both players
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;

  // Update dice images
  document.querySelector(".img1").setAttribute("src", `assets/dice${roll1}.png`);
  document.querySelector(".img2").setAttribute("src", `assets/dice${roll2}.png`);

  // Determine round winner
  let heading = document.querySelector("h1");
  if (roll1 > roll2) {
    score1++;
    heading.innerHTML = "🚩 Player 1 wins this round!";
  } else if (roll2 > roll1) {
    score2++;
    heading.innerHTML = "Player 2 wins this round! 🚩";
  } else {
    heading.innerHTML = "It's a draw!";
  }

  // Update scores and round number
  round++;
  document.getElementById("score1").textContent = score1;
  document.getElementById("score2").textContent = score2;
  document.getElementById("round").textContent = round;

  // Check for end of game
  if (round >= maxRounds) {
    endGame();
  }
}

function endGame() {
  const btn = document.querySelector(".butn");
  btn.disabled = true;

  let heading = document.querySelector("h1");
  if (score1 > score2) {
    heading.innerHTML = `🎉 Game Over! Player 1 wins with ${score1} points!`;
  } else if (score2 > score1) {
    heading.innerHTML = `🎉 Game Over! Player 2 wins with ${score2} points!`;
  } else {
    heading.innerHTML = `🤝 Game Over! It's a tie at ${score1} - ${score2}`;
  }
}
