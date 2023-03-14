const categories = document.querySelectorAll('li.item');
console.log(`Nubmer of categories: ${categories.length}`)
categories.forEach(function category(element) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`)
})