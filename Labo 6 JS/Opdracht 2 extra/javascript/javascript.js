const setup = () => {
    const liElementen = document.querySelectorAll("li");
    for (let i = 0; i < liElementen.length; i++) {
        liElementen.item(i).setAttribute("class", "listitem");
        liElementen.item(i).style.color="red";
    }
    const imgToevoegen =  document.createElement("img");
    imgToevoegen.setAttribute("src", "../img/kopie.jpg");
    const foto = document.getElementById("foto");
    foto.appendChild(imgToevoegen);
    imgToevoegen.style.width = "250px"
}
window.addEventListener("load", setup);