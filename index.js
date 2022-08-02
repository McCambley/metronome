let tempo = 0;
let clicks = [];

// const tempoElement = document.querySelector(".tempo");
const tempoButton = document.querySelector(".button");

tempoButton.addEventListener("click", handleClick);
window.addEventListener("keydown", handleClick);

function handleClick() {
  tempoButton.textContent = calculateTempo();
}

function calculateTempo() {
  const now = Date.now();
  clicks = [...clicks, now];

  const recent = clicks.filter((item) => {
    return item > now - 1000 * 5;
  });

  return recent.length <= 1
    ? "Tap"
    : Math.floor(((recent.length - 1) / (recent[recent.length - 1] - recent[0])) * 1000 * 60);
}
