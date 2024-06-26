document.addEventListener("DOMContentLoaded", function() {
    // Animation du bouton sponsor
    const sponsorImage = document.getElementById('sponsor');

    sponsorImage.addEventListener('mouseover', function() {
        this.classList.add('hover');
        setTimeout(() => {
            this.src = 'https://gitsite.dev/images/sponsor-fill.png';
            this.classList.remove('hover');
        }, 250);
    });

    sponsorImage.addEventListener('mouseout', function() {
        this.classList.add('hover');
        setTimeout(() => {
            this.src = 'https://gitsite.dev/images/sponsor.png';
            this.classList.remove('hover');
        }, 250);
    });

    // Redirection vers la page de la langue de l'utilisateur
    var manual = document.cookie.split('; ').find(row => row.startsWith('user_language_preference='))?.split('=')[1];

    if (!manual) {
        var FullUserLang = navigator.language || navigator.userLanguage;
        var userLang = FullUserLang.slice(0, 2);

        if (userLang === "en") {
            if (window.location.href !== "https://en.gitsite.dev/") {
                window.location.replace("https://en.gitsite.dev/");
            }
        } else {
            if (window.location.href !== "https://gitsite.dev/") {
                window.location.replace("https://gitsite.dev/");
            }
        }
    }
});
