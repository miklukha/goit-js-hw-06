let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

decrementBtn.addEventListener('click', onDecrementValue);
incrementBtn.addEventListener('click', onIncrementValue);

function onDecrementValue() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function onIncrementValue() {
  counterValue += 1;
  value.textContent = counterValue;
}
