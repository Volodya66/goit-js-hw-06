const values = {
    inputText: document.querySelector("#name-input"),
    spanNameUser : document.querySelector('#name-output')
};
const { inputText, spanNameUser } = values;

console.dir(values.spanNameUser);


const enteredText = (event) => {
    
    event.currentTarget.value === '' ?
        spanNameUser.textContent = "Anonymous!" :
       spanNameUser.textContent = event.currentTarget.value;

}

inputText.addEventListener("input", enteredText);