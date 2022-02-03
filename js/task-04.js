const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', onDecrementValue);
incrementBtnRef.addEventListener('click', onIncrementValue);

let counterValue = 0;

function onDecrementValue() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function onIncrementValue() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
