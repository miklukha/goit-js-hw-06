const bodyRef = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  const hex = getRandomHexColor();
  bodyRef.style.backgroundColor = hex;
  colorText.textContent = hex;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
