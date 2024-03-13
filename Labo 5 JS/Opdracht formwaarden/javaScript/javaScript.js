const setup = () => {
    const toonResultaat = () => {
        const formulier = document.getElementById("mijnFormulier");
        const isRoker = formulier.elements["isRokerKader"].checked;
        const moedertaal = formulier.elements["moedertaal"].value;
        const favorieteBuurland = formulier.elements["favorieteBuurland"].value;
        const bestelling = Array.from(formulier.elements["bestelling"]).filter(option => option.selected).map(option => option.value);

        console.log("Is roker:", isRoker);
        console.log("Moedertaal:", moedertaal);
        console.log("Favoriete buurland:", favorieteBuurland);
        console.log("Bestelling:", bestelling);
    }
}
window.addEventListener("load", setup);