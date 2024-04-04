const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;
const KAART_ACHTERKANT = "";

const playField = document.getElementById("playField");

const maakKaarten = () => {
    const kaartenNamen = maakKaartenNamen();

    for (let i = 0; i < AANTAL_VERTICAAL; i++) {
        for (let j = 0; j < AANTAL_HORIZONTAAL; j++) {
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.backgroundImage = `url(${KAART_ACHTERKANT})`;
            card.setAttribute("data-naam", kaartenNamen[i * AANTAL_HORIZONTAAL + j]);
            playField.appendChild(card);
        }
    }
};

const maakKaartenNamen = () => {

}

window.addEventListener("load", maakKaarten);
