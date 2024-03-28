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
    consoleBericht();
};

const setImageInterval = () => {
    clearInterval(global.timeoutId);
    global.timeoutId = setInterval( () => {
        randomizeImage();
        randomizePosition();
    }, global.MOVE_DELAY);
}

const onImageClick = () => {
    randomizeImage();
    randomizePosition();
    setImageInterval();
}

const randomizePosition = () => {
    let randomHorizontaal = Math.floor(Math.random() * 600 - global.IMAGE_SIZE);
    let randomVerticaal = Math.floor(Math.random() * 800 - global.IMAGE_SIZE);
    let image = document.getElementById("foto");
    image.style.marginLeft = randomHorizontaal + "px";
    image.style.marginTop = randomVerticaal + "px";
}

const randomizeImage = () => {
    const randomGetal = Math.floor(Math.random() * global.IMAGE_COUNT);
    let image = document.getElementById("foto");
    image.setAttribute("src", global.IMAGE_PATH_PREFIX + randomGetal + global.IMAGE_PATH_SUFFIX);
}
const consoleBericht = () => {
    let intervalConsole = setInterval(() => {
        console.log("Berichtje")
    },1000)
}


window.addEventListener("load", setup);


