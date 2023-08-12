const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = document.querySelector('#ingredients');
console.dir(listIngredients);


const itemIngredients = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient
  return item
});

listIngredients.append(...itemIngredients)







