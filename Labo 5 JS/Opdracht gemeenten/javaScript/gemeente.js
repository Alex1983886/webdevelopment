const setup = () => {
    let stopAlert = false;
    let lijstElement = document.getElementById("lijstGemeentes");
    while(!stopAlert) {
        let gemeente = prompt("Gemeente:");
        if(gemeente === "stop") {
            stopAlert = true
        } else {
            let optionElement = document.createElement("option");
            optionElement.value = gemeente;
            optionElement.textContent = gemeente;
            lijstElement.appendChild(optionElement);
        }
    }
}
window.addEventListener("load", setup);