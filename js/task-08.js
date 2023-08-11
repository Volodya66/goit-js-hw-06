
const form = document.querySelector('.login-form');

form.addEventListener("submit", noSub);

function noSub(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

    if (email.value === "") {
        alert("Не усе ввели, заповніть поле для введення email")
    };
     if (password.value === "") {
        alert("Не усе ввели, заповніть поле для введення password")
    };
    
    const data = {
        emailUser: email.value,
        passwordUser: password.value
    };
    console.log(data);
    event.currentTarget.reset()
};

