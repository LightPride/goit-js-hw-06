const elems = {
  decreaseButton: document.querySelector('[data-action="decrement"]'),
  increaseButton: document.querySelector('[data-action="increment"]'),
  valueElement: document.querySelector('#value'),
};

elems.decreaseButton.addEventListener('click', onDecreaseClick);
elems.increaseButton.addEventListener('click', onIncreaseClick);

let counterValue = 0
let elementValue = elems.valueElement;
function onDecreaseClick() {
  counterValue -= 1
  elementValue.textContent = counterValue;
};


function onIncreaseClick() {
  counterValue += 1;
  elementValue.textContent = counterValue;
};