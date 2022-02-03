const inputNumber = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divCollection = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = inputNumber.value;
  createBoxes(amount);
  inputNumber.value = '';
});
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const arrayOfDiv = [];

  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');

    const hex = getRandomHexColor();
    divEl.style.width = `${30 + i * 10}px`;
    divEl.style.height = `${30 + i * 10}px`;
    divEl.style.backgroundColor = hex;

    arrayOfDiv.push(divEl);
  }

  divCollection.append(...arrayOfDiv);
}

function destroyBoxes() {
  divCollection.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
