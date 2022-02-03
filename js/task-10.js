const inputNumberRef = document.querySelector('input');
const createBtnRef = document.querySelector('[data-create]');
const destroyBtnRef = document.querySelector('[data-destroy]');
const divCollectionRef = document.querySelector('#boxes');

createBtnRef.addEventListener('click', () => {
  const amount = inputNumberRef.value;
  createBoxes(amount);
  inputNumberRef.value = '';
});
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const arrayOfDiv = [];

  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement('div');

    const hex = getRandomHexColor();
    divElement.style.width = `${30 + i * 10}px`;
    divElement.style.height = `${30 + i * 10}px`;
    divElement.style.backgroundColor = hex;

    arrayOfDiv.push(divElement);
  }

  divCollectionRef.append(...arrayOfDiv);
}

function destroyBoxes() {
  divCollectionRef.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
