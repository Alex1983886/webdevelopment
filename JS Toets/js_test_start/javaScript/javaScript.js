const setup = () => {
    function toonFoto(keuze) {
        var foto = document.getElementById("img");
        switch (keuze) {
            case "kip_zonder_ei":
                foto.src = ""
                break;
            case "kip_met_ei":
                foto.src = "";
                break;
            default:
                foto.src = "";
        }
    }
    if (select === kip_zonder_ei) {
        zin = "Hierboven, een kip zonder ei";
        console.log(zin);
        let index = zin.indexOf("text_letter")
        let teller = 0;
        while (index > -1) {
            index =  zin.indexOf("text_letter", index + 1)
            teller++;
        }
        console.log(teller);
    } else if (select === kip_met_ei) {
        zin2 = "Hierboven, een kip met ei";
        console.log(zin2);
        let index = zin.indexOf("text_letter")
        let teller = 0;
        while (index > -1) {
            index =  zin.indexOf("text_letter", index + 1)
            teller++;
        }
        console.log(teller);
    } else {
        console.log("");
    }

}
window.addEventListener("load", setup);