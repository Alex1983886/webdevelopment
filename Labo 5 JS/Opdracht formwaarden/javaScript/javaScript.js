const toonResultaat = () => {
    const formulier = document.getElementById("formulier");
    const isRoker = formulier.elements["isRokerKader"].checked;
    const moedertaal = formulier.elements["moedertaal"].value;
    const favorieteBuurland = formulier.elements["favorieteBuurland"].value;
    const bestelling = Array.from(formulier.elements["bestelling"]).filter(option => option.selected).map(option => option.value);

    if (isRoker === true) {
        console.log("is wel een roker")
    } else {
        console.log("is geen roker")
    }

    console.log("moedertaal is", moedertaal);
    console.log("favoriete buurland is", favorieteBuurland);
    let stringKeuzes = "";
    for (const keuze in bestelling) {
        stringKeuzes += " " + bestelling[keuze]
    }
    console.log("bestelling bestaat uit" + stringKeuzes);
}
const setup = () => {
}
window.addEventListener("load", setup);