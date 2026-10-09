
const navigationLinks = document.querySelectorAll('nav a');

navigationLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        console.log("Navigating to:", link.textContent);
    });
});

console.log("Portfolio website loaded successfully!");