$(() => {
    let utente = localStorage.getItem('utente');
    $('#benvenuto').html('<h2>Benvenuto ' + utente + '</h2>');

    $('#logout').on('click', function() {
        localStorage.clear();
        location.href = 'login.html';
    });

    $('#creac').on('click', function() {
        location.href = 'creacorso.html';
    });
});