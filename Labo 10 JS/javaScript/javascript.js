let geschiedenis = [];
const setup = () => {
}
const clickSearch = () => {
    let invoer = document.getElementById("zoekInput").value;
    let bewerkteInvoer = invoer.slice(3);
    bewerkteInvoer = bewerkteInvoer.replace(" ", "+");
    switch (true) {
        case invoer.startsWith("/g "):
            window.open('http://www.google.com/search?q=' + bewerkteInvoer, '_blank')
            break;
        case invoer.startsWith("/y "):
            window.open('http://www.youtube.com/results?search_query=' + bewerkteInvoer, '_blank')
            break;
        case invoer.startsWith("/t "):
            window.open('https://twitter.com/hashtag/' + bewerkteInvoer, '_blank')
            break;
        case invoer.startsWith("/i "):
            window.open('http://www.instagram.com/explore/tags/' + bewerkteInvoer, '_blank')
            break;
        default:
            if (invoer.startsWith("/")) {
                alert('Unknown Command Prefix');
            } else {
                alert('Invalid command');
            }
            return;
    }
}


const goButton = document.getElementById("buttonGo");
goButton.addEventListener("click", clickSearch);

window.addEventListener("load", setup);