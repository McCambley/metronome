let tempo;

const tempoElement = document.querySelector(".tempo");
const tempoButton = document.querySelector(".button");

console.log(tempoElement);

tempoButton.addEventListener("click", handleClick);

function handleClick() {
  const newString = generateString();
  tempoElement.textContent = `${newString} BPM!`;
}

function generateString() {
  const text = Math.random() * 10;
  return `${text}`;
}
