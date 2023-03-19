function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');
colorButton.addEventListener("click", onColorButton);

function onColorButton(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorSpan.textContent = `${getRandomHexColor()}`;
}
