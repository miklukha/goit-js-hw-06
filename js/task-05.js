const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');

textInput.addEventListener('input', onChangeOutput);

function onChangeOutput(event) {
  const enteredName = event.currentTarget.value;

  textOutput.textContent = enteredName;

  if (!enteredName) {
    textOutput.textContent = 'Anonymous';
  }
}
