
const form = document.querySelector('.login-form');

form.addEventListener("submit", noSub);

function noSub(event) {
    event.preventDefault();
    const { email, password } = event.currentTarget.elements;

     if (password.value === "" || email.value === "" ) {
     return   alert("Не усе ввели, заповніть поле для введення ")
    };
    
    const data = {
        emailUser: email.value,
        passwordUser: password.value
    };
    console.log(data);
    event.currentTarget.reset()
};

