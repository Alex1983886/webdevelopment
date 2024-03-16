const setup = () => {
    document.querySelector('button').addEventListener('click', function() {
        var voornaam = document.getElementById('voornaam').value.trim();
        var familienaam = document.getElementById('familienaam').value.trim();
        var geboortedatum = document.getElementById('geboortedatum').value.trim();
        var email = document.getElementById('email').value.trim();
        var aantal_kinderen = parseInt(document.getElementById('aantal_kinderen').value);

        if (voornaam.length > 30) {
            showError('voornaam', 'Max. 30 karakters');
        } else {
            hideError('voornaam');
        }
        if (familienaam === '') {
            showError('familienaam', 'Verplicht veld');
        } else if (familienaam.length > 50) {
            showError('familienaam', 'Max. 50 karakters');
        } else {
            hideError('familienaam');
        }
        var geboortedatumPattern = /^\d{4}-\d{2}-\d{2}$/;
        if (geboortedatum === '' || !geboortedatumPattern.test(geboortedatum)) {
            showError('geboortedatum', 'Formaat is niet jjjj-mm-dd');
        } else {
            hideError('geboortedatum');
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailPattern.test(email)) {
            showError('email', 'Geen geldig email adres');
        } else {
            hideError('email');
        }
        if (isNaN(aantal_kinderen) || aantal_kinderen < 0 || aantal_kinderen >= 99) {
            showError('aantal_kinderen', 'Is geen positief getal of is te vruchtbaar');
        } else {
            hideError('aantal_kinderen');
        }
        var errors = document.querySelectorAll('.error');
        if (errors.length === 0) {
            alert('Proficiat!');
        }
    });
}

const showError = (fieldId, message) => {
    document.getElementById(fieldId).classList.add('error-input');
    document.getElementById(fieldId + 'Error').textContent = message;
}
const hideError = (fieldId) => {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = '';
    } else {
        console.error(`Error element for field ${fieldId} not found`);
    }
}


window.addEventListener("load", setup);
