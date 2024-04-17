const jsonStudent1 = '{"naam":"Alex","leeftijd":20,"geboortedatum":"2004-01-28T00:00:00.000Z","stad":"Roeselare","postcode":8800,"adres":"Vijfwegenstraat 216"}';
const setup = () => {
    let student1 = JSON.parse(jsonStudent1);
    console.log(student1.naam);
}

window.addEventListener("load", setup);
