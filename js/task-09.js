
const textColorValue = document.querySelector('.color');
const buttonCC = document.querySelector('.change-color')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const colorChange = () => {
  buttonCC.style.backgroundColor = getRandomHexColor();
  textColorValue.textContent = getRandomHexColor();
 };

buttonCC.addEventListener('click', colorChange);