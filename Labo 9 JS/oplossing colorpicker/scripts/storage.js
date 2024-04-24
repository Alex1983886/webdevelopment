const storeSliderValues = () => {
    let sliders = document.getElementsByClassName("sliders");
    let settings = {};

    for (let slider of sliders) {
        settings[slider.id] = slider.value
    }
};

const restoreSliderValues = () => {
    let storedSettings = JSON.parse(localStorage.getItem("sliderSettings"));
    
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten

};

const restoreSwatches = () => {

};