const sentences = [
  "Typing speed test is fun and challenging.",
  "Javascript is the language of the web.",
  "HTML and CSS are the building blocks of websites.",
  "Coding improves logical thinking and creativity."
];
const sentence = sentences[Math.floor(Math.random() * sentences.length)];
document.getElementById("sentence").textContent = sentence;

let startTime;
let errorCount = 0;

const input = document.getElementById("input");
input.addEventListener("input", () => {
  if (!startTime) startTime = new Date();

  const typed = input.value;
  errorCount = 0;
  for (let i = 0; i < typed.length; i++) {
    if (typed[i] !== sentence[i]) errorCount++;
  }

  if (typed === sentence) showStats();
});

function showStats() {
  const duration = (new Date() - startTime) / 1000 / 60;
  const wpm = Math.round(sentence.split(" ").length / duration);
  const accuracy = Math.max(0, Math.round(((sentence.length - errorCount) / sentence.length) * 100));
  document.getElementById("speed").textContent = wpm;
  document.getElementById("errors").textContent = errorCount;
  document.getElementById("accuracy").textContent = accuracy;
  document.getElementById("stats").classList.remove("hidden");
}
