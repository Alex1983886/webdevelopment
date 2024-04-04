let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let image = document.getElementById("foto");
    image.addEventListener("click", onImageClick);

    let startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);

    consoleBericht();
}

const setImageInterval = () => {
    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(() => {
        randomizeImage();
        randomizePosition();
    }, global.MOVE_DELAY);
}

const onImageClick = (event) => {
    if(event.target.currentSrc.slice(-5) === '0.png') {
        window.alert("Je hebt op een bom geklikt!");
        location.reload();
    }
    pasScoreAan();
    randomizeImage();
    randomizePosition();
    setImageInterval();

}

const pasScoreAan = () => {
    global.score++;
    let aantalHits = document.getElementById('aantalHits');
    aantalHits.innerHTML = global.score;
}
const startGame = () => {
    setImageInterval();
    const startKnop = document.getElementById('startButton');
    startKnop.style.display = 'none';

}

const randomizePosition = () => {
    let randomHorizontal = Math.floor(Math.random() * (600 - global.IMAGE_SIZE));
    let randomVertical = Math.floor(Math.random() * (800 - global.IMAGE_SIZE));
    let image = document.getElementById("foto");
    image.style.marginLeft = randomHorizontal + "px";
    image.style.marginTop = randomVertical + "px";
}

const randomizeImage = () => {
    const randomNum = Math.floor(Math.random() * global.IMAGE_COUNT);
    let image = document.getElementById("foto");
    image.setAttribute("src", global.IMAGE_PATH_PREFIX + randomNum + global.IMAGE_PATH_SUFFIX);
}

const consoleBericht = () => {
    let intervalConsole = setInterval(() => {
        console.log("Berichtje");
    }, 1000);
}

window.addEventListener("load", setup);
