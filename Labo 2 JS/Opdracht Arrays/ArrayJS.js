let familie = ['Alex', 'Axel', 'Alexa', 'Alexia', 'Jefke'];
console.log(familie.length);
console.log(familie[0]); //1e
console.log(familie[2]); //3e
console.log(familie[4]); //5e

const VoegNaamToe =(naam) =>{
    familie.push(naam);
}

let extraPersoon = prompt("Geef een nieuwe naam in: ", "Georgette");
VoegNaamToe(extraPersoon);
console.log(familie);

console.log(familie.join());