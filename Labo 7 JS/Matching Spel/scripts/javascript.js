const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;
const afbeeldingenArray = [
    "images/achterkant_kaart.jpg",
    "images/kaart1.png",
    "images/kaart1.png",
    "images/kaart2.png",
    "images/kaart2.png",
    "images/kaart3.png",
    "images/kaart3.png",
    "images/kaart4.png",
    "images/kaart4.png",
    "images/kaart5.png",
    "images/kaart5.png",
    "images/kaart6.png",
    "images/kaart6.png",
];


let gekozenKaarten = [];
let kaartenGevonden = 0;

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const createGameBoard = () => {
    const gameContainer = document.querySelector(".game");
    gameContainer.innerHTML = "";
    const shuffledImages = shuffleArray(afbeeldingenArray);

    for (let i = 0; i < AANTAL_VERTICAAL; i++) {
        for (let j = 0; j < AANTAL_HORIZONTAAL; j++) {
            const cardContainer = document.createElement("div");
            cardContainer.classList.add("card-container");

            const card = document.createElement("div");
            card.classList.add("card");
            card.style.backgroundImage = `url('images/achterkant.png')`;

            card.addEventListener("click", () => {
                if (
                    !card.classList.contains("gevonden") &&
                    gekozenKaarten.length < 2 &&
                    !gekozenKaarten.includes(card)
                ) {
                    card.style.backgroundImage = `url('${shuffledImages[i * AANTAL_HORIZONTAAL + j]}')`;
                    gekozenKaarten.push(card);

                    if (gekozenKaarten.length === 2) {
                        setTimeout(checkMatch, 1000);
                    }
                }
            });

            cardContainer.appendChild(card);
            gameContainer.appendChild(cardContainer);
        }
    }
};

const checkMatch = () => {
    const [card1, card2] = gekozenKaarten;

    if (card1.style.backgroundImage === card2.style.backgroundImage) {
        card1.classList.add("gevonden");
        card2.classList.add("gevonden");
        kaartenGevonden += 2;
        gekozenKaarten = [];

        if (kaartenGevonden === AANTAL_KAARTEN) {
            alert("Gefeliciteerd, je hebt alle kaarten gevonden!");
        }
    } else {
        setTimeout(() => {
            card1.style.backgroundImage = `url('images/achterkant.png')`;
            card2.style.backgroundImage = `url('images/achterkant.png')`;
            gekozenKaarten = [];
        }, 500);
    }
};

const resetGame = () => {
    gekozenKaarten = [];
    kaartenGevonden = 0;
    createGameBoard();
};

const setup = () => {
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", resetGame);

    createGameBoard();
};

window.addEventListener("load", setup);
