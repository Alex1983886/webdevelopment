const setup = () => {
    const btnBerekenen = document.getElementById("herbereken");
    btnBerekenen.addEventListener("click", berekenen);
}

const berekenen = () => {
    const subtotaalElementen = document.getElementsByClassName('subtotaal');
    let totaal = 0;

    for (let i = 0; i < subtotaalElementen.length; i++) {
        const prijsString = document.getElementsByClassName('prijs')[i].textContent;
        const prijs = parseFloat(prijsString.split(' ')[0]);

        let aantal = parseInt(document.getElementsByClassName('aantal')[i].value, 10);
        aantal = isNaN(aantal) ? 0 : aantal;

        const btwString = document.getElementsByClassName('btw')[i].textContent;
        const btw = parseFloat(btwString.split('%')[0]) / 100;

        const subtotaal = prijs * aantal * (1 + btw);
        subtotaalElementen[i].innerText = subtotaal.toFixed(2) + " Eur";
        totaal += subtotaal;
    }

    document.getElementById("totaal").innerText = totaal.toFixed(2) + " Eur";
}

window.addEventListener("load", setup);
