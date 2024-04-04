const AANTAL_HORIZONTAAL = 4;
const AANTAL_VERTICAAL = 3;
const AANTAL_KAARTEN = 6;

const afbeeldingenArray = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png', 'img6.png', 'achterkant_kaart.jpg'];

let kaarten = [];
let omgedraaideKaarten = [];

const setup = () => {
}
function kaarten() {
    const speelveld = document.getElementById('spel');
    for (let i = 0; i < AANTAL_KAARTEN; i++) {
        for (let j = 0; j < 2; j++) {
            const spelKaart = document.createElement('div');
            spelKaart.classList.add('kaart');

}
// horizontaal loopen 
window.addEventListener("load", setup);
