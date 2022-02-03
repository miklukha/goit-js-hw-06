const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onCheckValidInput);

function onCheckValidInput(event) {
  const inputTextLength = event.currentTarget.value.length;
  const validInputTextLength = Number(inputRef.dataset.length);

  inputRef.classList.add('invalid');

  if (inputTextLength === validInputTextLength) {
    inputRef.classList.replace('invalid', 'valid');
  }
}
