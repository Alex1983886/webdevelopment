const setup = () => {
    const input_text_submit = document.getElementById("input_text_submit")
    input_text_submit.addEventListener("click", zet_spaties)
}
const zet_spaties = () => {
    const text = document.getElementById("input_text").value
    console.log(text.split("").join(" "));
}

window.addEventListener("load", setup);