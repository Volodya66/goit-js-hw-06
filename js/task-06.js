const input = document.querySelector('#validation-input');
const numberOfLengthInput = Number.parseInt(input.getAttribute("data-length"));

input.addEventListener("blur", classOn);

function classOn() {
   
    input.value.length === numberOfLengthInput ?
        input.classList.add("valid") : input.classList.add("invalid");

    // if (input.value.length === numberOfLengthInput) {
    //     input.classList.add("valid")
    //     input.classList.remove("invalid")
    // } else {
    //     input.classList.add("invalid")
    //      input.classList.remove("valid")
    // }
};


