const managementTools = document.querySelector('#controls');
const inputNumberCreation = managementTools.querySelector('input[type="number"]');
const buttonCreate =managementTools.querySelector('[data-create]');
const buttonDestroy = managementTools.querySelector('[data-destroy]');

const boxesDiv = document.querySelector('#boxes');
console.log(boxesDiv);

////////////////////////////// ?
buttonCreate.addEventListener('click', createBox);


function createBox() {
  boxesDiv.reset
  
 const num = inputNumberCreation.value;
  if (num > 0) {
    const accDiv = [];
    for (let i = 0; i < num; i += 1) {
      const newDiv = document.createElement('div')
      newDiv.style.width = (30+i*10) + "px";
      newDiv.style.height =  (30+i*10)+ "px";
      newDiv.style.backgroundColor = getRandomHexColor();
      accDiv.push(newDiv)
    }
    boxesDiv.append(...accDiv);
  }
}
//////////////////////////////// ?

buttonDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}

//////////////////////////////// ?
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
