let student1 = {
    "naam": "Alex",
    "leeftijd": 20,
    "geboortedatum": new Date(2004, 0, 28),
    "stad": "Roeselare",
    "postcode": 8800,
    "adres": "Vijfwegenstraat 216"
};
const setup = () => {
    let jsonStudent1 = JSON.stringify(student1);
    console.log(jsonStudent1);
}
window.addEventListener("load", setup);
