const managementTools = document.querySelector('#controls');
const inputNumberCreation = managementTools.querySelector('input[type="number"]');
const min = parseInt(inputNumberCreation.getAttribute('min'));
const max = parseInt(inputNumberCreation.getAttribute('max'));
const step = parseInt(inputNumberCreation.getAttribute('step'));
const buttonCreate =managementTools.querySelector('[data-create]');
const buttonDestroy = managementTools.querySelector('[data-destroy]');

const boxesDiv = document.querySelector('#boxes');
////////////////////////////// ?
buttonCreate.addEventListener('click', numberLaunch);

function createBoxes(amount) {
 
  if (amount > 0 && amount <=max) {
    const accDiv = [];
    let paramWH = 30;
    for (let i = 0; i < amount; i += 1) {
      paramWH += 10;
      const newDiv = `<div style="width:${paramWH}px ; height:${paramWH}px ; background-color:${getRandomHexColor()} ;"></div>`;
      accDiv.push(newDiv);
    };
    boxesDiv.insertAdjacentHTML("beforeend", accDiv.join(''));
  } else { alert(`Enter any positive number less than ${max} and not less than 0) `)}
  
}


function numberLaunch() {
  const num = parseInt(inputNumberCreation.value);
  createBoxes(num);
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
