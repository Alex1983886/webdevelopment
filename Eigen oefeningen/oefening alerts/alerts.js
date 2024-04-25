const setup = () => {
    let count = 0;
    function showAlert() {
        if (count < 5) {
            alert("Dit is alert nummer " + (count + 1));
            count++;
        }
    }
    document.getElementById("alertButton").addEventListener("click", showAlert);
}
window.addEventListener("load", setup);
