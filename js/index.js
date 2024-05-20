document.addEventListener("DOMContentLoaded", function() {
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