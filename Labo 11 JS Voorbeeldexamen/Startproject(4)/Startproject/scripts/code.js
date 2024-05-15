let global = {
    woordjes: ["stoel","tafel","nieuw","vader","index","begin"],
    gezochteWoord: "",
    naam: "",
    isGestart: false,
    maanden: ["Januari","Februari","Maart","April","Mei","Juni","Juli","Augustus","September","Oktober","November","December"]
}
const setup = () => {
    document.getElementById('nieuw').addEventListener('click', startSpel)
    document.getElementById('go').addEventListener('click', woordzoeker);
    document.getElementById('clear').addEventListener('click', deleteHighscores);
}
const randomWoord = () => {
    global.gezochteWoord = global.woordjes[Math.floor(Math.random()*global.woordjes.length)]
}
const naam =() => {
    global.naam = window.prompt("Typ je naam in")
}
const startSpel = () => {
    naam()
    randomWoord()
    global.isGestart = true;
}
const woordzoeker = () => {
    if (global.isGestart === true) {
        let gokje = document.getElementById('gok').value;
        if (gokje.length === 5) {
            const letters = gokje.split("");
            const gokkenElement = document.getElementById('gokken');
            gokkenElement.innerHTML = ""; // Leeg eerst de inhoud

            const hoofdDiv = document.createElement('div');
            hoofdDiv.className = 'woord-container';

            for (let i = 0; i < letters.length; i++) {
                const letter = letters[i];
                const div = document.createElement('div');

                if (letter === global.gezochteWoord[i]) {
                    div.className = 'juist';
                } else if (global.gezochteWoord.includes(letter)) {
                    div.className = 'bevat';
                } else {
                    div.className = 'fout';
                }
                div.textContent = letter;
                hoofdDiv.appendChild(div);
            }
            gokkenElement.appendChild(hoofdDiv);
            if (gokje === global.gezochteWoord) {
                document.getElementById('highscores').innerHTML += `<li>${global.naam}: ${gokje}</li>`;
                global.isGestart = false;
            }
        }
    }
}
const deleteHighscores = () => {
    document.getElementById('highscores').innerHTML = "";
}

window.addEventListener("load", setup);

