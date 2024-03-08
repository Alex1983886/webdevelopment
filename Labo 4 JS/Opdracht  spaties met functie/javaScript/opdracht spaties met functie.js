const setup = () => {
    const input_text_submit = document.getElementById("input_text_submit")
    input_text_submit.addEventListener("click", () => zet_spaties(document.getElementById("input_text").value))
}
const zet_spaties = (inputText) => {
    /*const text = document.getElementById("input_text").value*/
    console.log(inputText.split("").join(" "));
}

window.addEventListener("load", setup);