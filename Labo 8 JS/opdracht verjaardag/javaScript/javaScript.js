const setup = () => {
    let today = new Date();
    let verjaardag = new Date(2004, 0, 28);
    let verschil = today - verjaardag;

    let dagenVerschil = Math.floor(verschil / (1000 * 60 * 60 * 24));
    console.log(dagenVerschil + " dagen");
}
window.addEventListener("load", setup);

