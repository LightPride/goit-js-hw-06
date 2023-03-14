const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
ingredients.forEach(function makeIngredient(ingredient) {
  const ing = document.createElement("li");
  ing.textContent = ingredient;
  ing.classList.add("item");
  ingredientsList.append(ing);
})

