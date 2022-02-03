const textInputRef = document.querySelector('#name-input');
const textOutputRef = document.querySelector('#name-output');

textInputRef.addEventListener('input', onChangeOutput);

function onChangeOutput(event) {
  const enteredName = event.currentTarget.value;

  if (!enteredName) {
    textOutputRef.textContent = 'Anonymous';
    return;
  }

  textOutputRef.textContent = enteredName;
}
