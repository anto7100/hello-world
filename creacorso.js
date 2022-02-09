$(() => {
    let utente = localStorage.getItem('utente');
    $('#crea').html('<h2>Corso creato da ' + utente + '</h2>');

    $('#logout').on('click', function() {
        localStorage.clear();
        location.href = 'login.html';
    });
});