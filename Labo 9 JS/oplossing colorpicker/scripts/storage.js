const storeSliderValues = () => {
    let sliders = document.getElementsByClassName("slider");
    let settings = {};

    for (let slider of sliders) {
        settings[slider.id] = slider.value
    }
    localStorage.setItem("sliderSettings",JSON.stringify(settings));

};

const restoreSliderValues = () => {
    let storedSettings = JSON.parse(localStorage.getItem("sliderSettings")); // slider settings uit local storage halen
    console.log(storedSettings);
    let redValue = document.getElementById("sldRed");
    redValue.value = storedSettings.sldRed; // een property van het object halen
    let greenValue = document.getElementById("sldGreen");
    greenValue.value = storedSettings.sldGreen;
    let blueValue = document.getElementById("sldBlue");
    blueValue.value = storedSettings.sldBlue;
};
const storeSwatches = () => {
    let swatches = document.getElementsByClassName("swatch-item");
    let colorsArray = []

    for (let swatch of swatches) {
        colorsArray.push(swatch.style.backgroundColor);
    }
    localStorage.setItem("swatchSettings",JSON.stringify(colorsArray));
};

const restoreSwatches = () => {
    let storedColors = JSON.parse(localStorage.getItem("swatchSettings"));
    for (let color of storedColors) {
        // alles van code.js kopieren en lijn 38 aanpassen
        let swatch = document.createElement("div");
        swatch.classList.add("swatch-item");
        swatch.style.backgroundColor = color;

        let deleteButton = document.createElement("span");
        deleteButton.innerHTML = "X";
        deleteButton.classList.add("delete-button");
        deleteButton.addEventListener("click", function() {
            swatch.remove();
            storeSwatches();
        });

        let swatchContainer = document.createElement("div");
        swatchContainer.classList.add("swatch-container");
        swatch.append(deleteButton);
        swatchContainer.appendChild(swatch);


        swatch.addEventListener("click", function() {
            let color = swatch.style.backgroundColor;
            let rgb = color.substring(4, color.length - 1)
                .replace(/ /g, '')
                .split(',');
            document.getElementById("sldRed").value = rgb[0];
            document.getElementById("sldGreen").value = rgb[1];
            document.getElementById("sldBlue").value = rgb[2];
            update();
        });
        document.body.appendChild(swatchContainer);
    }
};