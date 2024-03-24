const setup = () => {
    let pElement = document.querySelectorAll("p");
    let text_node = pElement.item(0).firstChild;
    text_node.nodeValue = "Good job!";

}
window.addEventListener("load", setup);