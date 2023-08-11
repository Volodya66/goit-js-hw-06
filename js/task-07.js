const range = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

range.addEventListener("input", fontSizeText);

function fontSizeText() {
    textValue.style.fontSize = range.value+"px"
}