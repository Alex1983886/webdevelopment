const setup = () => {
    let txtInput = document.getElementById("txtInput");
    let btnSubstring = document.getElementById("knopje");
    let beginNummer = document.getElementById("begin");
    let eindeNummer = document.getElementById("einde");
    let txtOutput = document.getElementById("txtOutput");

    const neemSubstring = (begin, einde) =>{
        begin = parseInt(beginNummer.value);
        einde =  parseInt(eindeNummer.value);
        let substring = txtInput.value.substring(begin, einde);
        txtOutput.innerHTML= substring;
    }

    btnSubstring.addEventListener('click', neemSubstring);
}
window.addEventListener("load", setup);