const itemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach(el => {
  const titleOfCategory = el.querySelector('h2').textContent;
  const elementsOfCategory = el.querySelectorAll('li').length;

  console.log(`Category: ${titleOfCategory}`);
  console.log(`Elements: ${elementsOfCategory}`);
});
