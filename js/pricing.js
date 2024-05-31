document.addEventListener("DOMContentLoaded", function() {
    // Bouton essai gratuit
    const button = document.getElementById('essai');
    button.addEventListener('click', function() {
        localStorage.setItem('essaiClick', 'true');
    });

    if (localStorage.getItem('essaiClick') != 'true') {
        button.textContent = 'Commencer l\'essai gratuit';
    }
});