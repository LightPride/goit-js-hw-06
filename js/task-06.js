const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onValidationBlur)

function onValidationBlur(event) {
  const lengthOfInput = validationInput.value.length;
  const dataLengthOfInput = validationInput.getAttribute("data-length");
  if (lengthOfInput < dataLengthOfInput || lengthOfInput > dataLengthOfInput) {
      validationInput.classList.add('invalid');
  } else {
      validationInput.classList.replace('invalid', 'valid');
  }
}

