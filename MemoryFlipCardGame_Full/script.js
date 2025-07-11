const emojis = ["🍎","🍌","🍇","🍓","🍉","🍒","🍍","🥝"];
let cards = [...emojis, ...emojis].sort(() => 0.5 - Math.random());
let firstCard = null, secondCard = null;
let moves = 0, matched = 0;
let startTime = Date.now();

const board = document.getElementById("game-board");

cards.forEach((emoji, index) => {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.index = index;
  card.dataset.emoji = emoji;
  card.onclick = () => flipCard(card);
  board.appendChild(card);
});

function flipCard(card) {
  if (card.classList.contains("flipped") || secondCard) return;
  card.textContent = card.dataset.emoji;
  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
  } else {
    secondCard = card;
    moves++;
    if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
      matched += 2;
      resetPair();
      if (matched === cards.length) showResult();
    } else {
      setTimeout(() => {
        firstCard.textContent = "";
        secondCard.textContent = "";
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetPair();
      }, 800);
    }
  }
}

function resetPair() {
  firstCard = null;
  secondCard = null;
}

function showResult() {
  const totalTime = Math.round((Date.now() - startTime) / 1000);
  document.getElementById("moves").textContent = moves;
  document.getElementById("time").textContent = totalTime;
  const stars = "★".repeat(3 - Math.floor(moves / 6)) + "☆".repeat(Math.floor(moves / 6));
  document.getElementById("rating").textContent = stars;
  document.getElementById("result").classList.remove("hidden");
}
