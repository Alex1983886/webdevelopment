const setup = () => {
    const zin = "De man van An geeft geen hand aan ambetante verwanten";
    let index = zin.indexOf("an")
    let teller = 0;
    while (index > -1) {
        index =  zin.indexOf("an", index + 1)
        teller++;
    }
    console.log(teller);
}
window.addEventListener("load", setup);