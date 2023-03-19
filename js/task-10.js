function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("[type='number']");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes")

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1){
    const divElement = document.createElement("div");
    divElement.style.width = `${30 + 10 * i}px`;
    divElement.style.height = `${30 + 10 * i}px`;
    divElement.style.backgroundColor = getRandomHexColor();

    boxesDiv.appendChild(divElement);
  }
    
}

createButton.addEventListener("click", createBoxes(input.value));

// Щось на цьому місці я застиг, поясніть будь ласка у відео що до чого і
// як це все доробити