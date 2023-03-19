const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const ingredientsArray = ingredients.map(ingredient => {
  const ing = document.createElement("li");
  ing.textContent = ingredient;
  ing.classList.add("item");
  return ing;
})

ingredientsList.append(...ingredientsArray);