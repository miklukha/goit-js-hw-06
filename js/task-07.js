const inputRangeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRangeRef.addEventListener('input', onIncreaseFontSize);

function onIncreaseFontSize(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
