document.addEventListener("DOMContentLoaded", function() {
    // Redirection vers la page de la langue de l'utilisateur
    var manual = document.cookie.split('; ').find(row => row.startsWith('user_language_preference='))?.split('=')[1];

    if (!manual) {
        var FullUserLang = navigator.language || navigator.userLanguage;
        var userLang = FullUserLang.slice(0, 2);

        if (userLang === "en") {
            if (window.location.href !== "https://en.gitsite.dev/404") {
                window.location.replace("https://en.gitsite.dev/404");
            }
        } else {
            if (window.location.href !== "https://gitsite.dev/404") {
                window.location.replace("https://gitsite.dev/404");
            }
        }
    }
});
