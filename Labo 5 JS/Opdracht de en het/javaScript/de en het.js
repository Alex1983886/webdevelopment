const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let lidwoorden = tekst.split(" ");

    for (let i = 0; i < lidwoorden.length; i++) {
        if (lidwoorden[i] === "de") {
            lidwoorden[i] = "het";
        } else if (lidwoorden[i] === "De") {
            lidwoorden[i] = "Het";
        }
    }
    let nieuweTekst = lidwoorden.join(" ");
    console.log(nieuweTekst);
}
window.addEventListener("load", setup);