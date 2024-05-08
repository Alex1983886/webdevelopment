let myGlobal = {
    history: []
}

const setupPage = () => {
    document.getElementById('buttonGo').addEventListener('click', clickSearch);
    if(localStorage.getItem('history') !== null) {
        restoreHistory();
    }
}

const clickSearch = () => {
    let command = document.getElementById('commandInput').value.trim();
    if(command.charAt(0) !== '/' || command.charAt(2) !== ' ') {
        alert('Invalid command');
    }
    else {
        let prefix = command.charAt(1);
        let searchQuery = command.slice(3);
        let formattedSearchQuery = searchQuery.replace(/ /g, "+");
        let url;
        switch (prefix) {
            case 'g':
                url = 'https://www.google.com/search?q=' + formattedSearchQuery;
                window.open(url);
                updateHistory('Google', searchQuery, url);
                break;
            case 'y':
                url = 'https://www.youtube.com/results?search_query=' + formattedSearchQuery;
                window.open(url);
                updateHistory('YouTube', searchQuery, url);
                break;
            case 't':
                url = 'https://twitter.com/hashtag/' + formattedSearchQuery;
                window.open(url);
                updateHistory('Twitter', searchQuery, url);
                break;
            case 'i':
                url = 'https://www.instagram.com/explore/tags/' + formattedSearchQuery;
                window.open(url);
                updateHistory('Instagram', searchQuery, url);
                break;
            default:
                alert('Unknown command prefix');
        }
    }
}

const updateHistory = (platform, searchQuery, url) => {
    myGlobal.history.push({
        title: platform,
        text: searchQuery,
        url: url
    });
    createCard(platform, searchQuery, url);
    localStorage.setItem('history', JSON.stringify(myGlobal.history));
}

const createCard = (platform, searchQuery, url) => {
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card");
    card.classList.add(platform.toLowerCase()+"-card");
    let cardBody = createElementWithClassName("div", "card-body");
    let cardTitle = createElementWithClassNameAndText("h5", "card-title", platform); // Alleen platform in de titel
    let cardText = createElementWithClassNameAndText("p", "card-text", searchQuery);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(platform.toLowerCase()+"-button");

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(linkGo);
    card.appendChild(cardBody);
    col4.appendChild(card);

    let row = document.querySelector("#resultatenContainer > .row");
    row.appendChild(col4);
}

const createElementWithClassName = (element, className) => {
    let newElement = document.createElement(element);
    newElement.setAttribute("class", className);
    return newElement;
}

const createElementWithClassNameAndText = (element, className, text) => {
    let newElement = createElementWithClassName(element, className);
    newElement.appendChild(document.createTextNode(text));
    return newElement;
}

const createLinkButton = (url) => {
    let newButton = document.createElement("a");
    newButton.href = url;
    newButton.classList.add('btn');
    newButton.classList.add('btn-primary');
    newButton.target = '_blank';
    newButton.appendChild(document.createTextNode("Go!"));
    return newButton;
}

const restoreHistory = () => {
    myGlobal.history = JSON.parse(localStorage.getItem('history'));

    for(let i = 0; i < myGlobal.history.length; i ++) {
        createCard(myGlobal.history[i].title, myGlobal.history[i].text, myGlobal.history[i].url);
    }
}

window.addEventListener("load", setupPage);
