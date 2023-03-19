const fontSizeController = document.querySelector('#font-size-control');
const spanForFontController = document.querySelector('#text');



fontSizeController.addEventListener('input', onFontSizeController);

function onFontSizeController(event) {
  spanForFontController.style.fontSize = `${fontSizeController.value}px`;
}

