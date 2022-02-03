const itemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${itemsRef.length}`);

itemsRef.forEach(item => {
  const titleOfCategory = item.querySelector('h2').textContent;
  const elementsOfCategory = item.querySelectorAll('li').length;

  console.log(`Category: ${titleOfCategory}`);
  console.log(`Elements: ${elementsOfCategory}`);
});
