const values = {
    inputText: document.querySelector("#name-input"),
    spanNameUser : document.querySelector('#name-output')
};
const { inputText, spanNameUser } = values;

console.dir(values.spanNameUser);


const enteredText = (event) => {
    // if (event.currentTarget.value === '') { values.spanNameUser.textContent = "Anonymous!" } else { values.spanNameUser.textContent = event.currentTarget.value };
    event.currentTarget.value === '' ?
        spanNameUser.textContent = "Anonymous!" :
       spanNameUser.textContent = event.currentTarget.value;

}

inputText.addEventListener("input", enteredText);