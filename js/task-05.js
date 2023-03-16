const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');


nameInput.addEventListener('input', onNameInput);

function onNameInput(event) {
  nameOutput.textContent = nameInput.value;
  if (nameInput.value === '') {
      nameOutput.textContent = 'Anonymous';
  };
};