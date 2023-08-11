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
// console.log(...itemIngredients);
listIngredients.append(...itemIngredients)

// ? перезаписує ДОМ погана практика 
// const ingredientsItem = (ingredients) => {
//   ingredients.forEach(element => {
//     const elIngredient = document.createElement("li");
//     elIngredient.textContent = element;
//     listIngredients.append(elIngredient)
//   });}
// ingredientsItem(ingredients)


// const potatoes = document.createElement("li");
// potatoes.textContent = "Potatoes";

// const mushrooms = document.createElement("li");
// mushrooms.textContent = "Mushrooms";

// const garlic = document.createElement("li");
// garlic.textContent = "Garlic";

// const tomatos = document.createElement("li");
// tomatos.textContent = "Tomatos";

// const herbs = document.createElement("li");
// herbs.textContent = "Herbs";

// const condiments = document.createElement("li");
// condiments.textContent = "Condiments";


// listIngredients.append(potatoes, mushrooms, garlic, tomatos, herbs, condiments);
// console.dir(listIngredients.children);





