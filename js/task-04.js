
const valuesVariables = {
subtractButton: document.querySelector('button[data-action="decrement"]'),
addButton : document.querySelector('button[data-action="increment"]'),
value: document.querySelector('#value'),
}
let counterValue = 0;

function subtractNumberSpan() {
    
    counterValue -= 1;
    valuesVariables.value.textContent = counterValue;
}

function addNumberSpan() {
    
    counterValue += 1;
     valuesVariables.value.textContent = counterValue;
}

valuesVariables.subtractButton.addEventListener("click", subtractNumberSpan);

valuesVariables.addButton.addEventListener("click", addNumberSpan);


