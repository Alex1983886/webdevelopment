const setup = () => {
    let woord1 ="onoorbaar";
    for (let i = 0; i < woord1.length; i++) {
        if( !((i+3) > woord1.length))
            console.log(woord1.slice(i, i + 3));
    }
}
window.addEventListener("load", setup);