const setup = () => {
    document.getElementById("button").addEventListener("click", createElementAndAppend);
}

const createElementAndAppend =() => {
    let paragraph = document.createElement("p");
    let text = document.createTextNode("Dit heb je toegevoegd");
    paragraph.appendChild(text);
    let div = document.getElementById("myDIV");
    div.appendChild(paragraph);
}
window.addEventListener("load", setup);