const objCategories = document.querySelector("#categories");
// ? console.dir(objCategories);
const item = objCategories.children
// ? console.log(item);
console.log(`Number of categories: ${item.length}`);


const result = [...item].forEach(element => {
    console.log(`Category:  ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});



























// const numberCategories = objCategories.children(item)
// console.log(numberCategories);