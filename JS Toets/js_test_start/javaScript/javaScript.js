let gekozenFoto = "";
function toonFoto(keuze) {
    gekozenFoto = keuze;
    const foto = document.getElementById("img");
    const zinOnderFoto = document.getElementById("note");
    switch (keuze) {
        case "kip_zonder_ei":
            foto.classList.remove("hidden");
            zinOnderFoto.innerHTML = "Hierboven, een kip zonder ei";
            break;
        case "kip_met_ei":
            foto.classList.remove("hidden");
            foto.classList.add("with-egg");
            zinOnderFoto.innerHTML = "Hierboven, een kip met ei";
            break;
        default:
            foto.classList.add("hidden");
    }
    refresh();
}
const setup = () => {

    const zinVanFoto = document.getElementById("text_letter");
    zinVanFoto.addEventListener("input", (event ) => {
        refresh();
    })

}
const refresh = () => {
    const countOnderaan = document.getElementById("count");
    if (gekozenFoto === "kip_zonder_ei") {
        zin = "Hierboven, een kip zonder ei";
        console.log(zin);
        let index = zin.indexOf(event.data)
        let teller = 0;
        while (index > -1) {
            index =  zin.indexOf(event.data, index + 1)
            teller++;
        }
        countOnderaan.innerHTML = teller;
    } else if (gekozenFoto === "kip_met_ei") {
        zin = "Hierboven, een kip met ei";
        console.log(zin);
        let index = zin.indexOf(event.data)
        let teller = 0;
        while (index > -1) {
            index =  zin.indexOf(event.data, index + 1)
            teller++;
        }
        countOnderaan.innerHTML = teller;
    }
}

window.addEventListener("load", setup);