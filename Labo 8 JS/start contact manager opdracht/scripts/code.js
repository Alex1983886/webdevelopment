let personen=[
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    const isValid = valideer();
    if (isValid) {
        const voornaam = document.getElementById("voornaam").value;
        const familienaam = document.getElementById("familienaam").value;
        const geboorteDatum = new Date(document.getElementById("geboorteDatum").value);
        const email = document.getElementById("email").value;
        const aantalKinderen = parseInt(document.getElementById("aantalKinderen").value);

        const bestaandePersoonIndex = personen.findIndex(persoon => persoon.voornaam === voornaam && persoon.familienaam === familienaam);
        if (bestaandePersoonIndex !== -1) {
            personen[bestaandePersoonIndex].geboorteDatum = geboorteDatum;
            personen[bestaandePersoonIndex].email = email;
            personen[bestaandePersoonIndex].aantalKinderen = aantalKinderen;
        } else {
            personen.push({ voornaam, familienaam, geboorteDatum, email, aantalKinderen });
        }
        updatePersonenLijst();
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {

    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);







