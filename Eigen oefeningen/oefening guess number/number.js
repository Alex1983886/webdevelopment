const setup = () => {
    function guessNumber() {
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        const userGuess = parseInt(document.getElementById("userGuess").value);

        if (userGuess === randomNumber) {
            alert("Proficiat! Je hebt het juiste getal geraden.");
        } else {
            alert("Fout, probeer het opnieuw!");
        }
    }
    document.getElementById("guessButton").addEventListener("click", guessNumber);
}
window.addEventListener("load", setup);
