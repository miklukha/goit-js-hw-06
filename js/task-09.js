const bodyRef = document.querySelector('body');
const changeColorBtnRef = document.querySelector('.change-color');
const colorTextRef = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', onChangeColor);

function onChangeColor() {
  const hex = getRandomHexColor();
  bodyRef.style.backgroundColor = hex;
  colorTextRef.textContent = hex;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
