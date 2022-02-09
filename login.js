$(() => {
    localStorage.clear();
    $('#entra').on('click', function() {
        let utente = $('#typeEmailX-2').val();
        let password = $('#typePasswordX-2').val();
        let regex1 = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/;
        let regex2 = /^(?=.*[0-9])/;
        if (utente == '' || password == '') {
            alert('Inserisci nome utente e password')
        } else if (password.length < 6) {
            alert('La password deve contenere almeno 6 caratteri!')
        } else if (!regex2.test(password)) {
            alert('La password deve contenere almeno un numero!')
        } else if (!regex1.test(utente)) {
            alert('Inserisci caratteri validi per la mail!')
        } else {
            localStorage.setItem('utente', utente);
            location.href = 'elenco.html'

        }
    })
});