const setup = () => {
    const images = [
        "image1.jpg",
        "image2.png",
        "image3.jpg",
        "image4.jpg",
        "image5.png",
        "image6.png"
    ];
    const afbeeldingContainer = document.getElementById("afbeeldingContainer");
    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = "Afbeelding";
        afbeeldingContainer.appendChild(imgElement);
    });
}
window.addEventListener("load", setup);
