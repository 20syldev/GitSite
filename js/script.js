document.addEventListener("DOMContentLoaded", function() {
    // Bouton essai gratuit
    const button = document.getElementById('essai');
    button.addEventListener('click', function() {
        localStorage.setItem('essaiClick', 'true');
    });

    if (localStorage.getItem('essaiClick') != 'true') {
        button.textContent = 'Commencer l\'essai gratuit';
    }

    // Animation du bouton sponsor
    const sponsorImage = document.getElementById('sponsor');

    sponsorImage.addEventListener('mouseover', function() {
        this.classList.add('hover');
        setTimeout(() => {
            this.src = 'images/sponsor-fill.png';
            this.classList.remove('hover');
        }, 250);
    });

    sponsorImage.addEventListener('mouseout', function() {
        this.classList.add('hover');
        setTimeout(() => {
            this.src = 'images/sponsor.png';
            this.classList.remove('hover');
        }, 250);
    });
});