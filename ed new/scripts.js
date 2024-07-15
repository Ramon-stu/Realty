// JavaScript para cambio de fondo en videos.html
const backgrounds = [
    "pic/backround1.jpg",
    "pic/backround2.jpg",
    "pic/backround3.jpg",
    "pic/backround4.jpg",
    "pic/backround5.jpg",
    "pic/backround6.jpg",
    "pic/backround7.jpg"
];

let currentBackground = 0;
const backgroundElement = document.querySelector(".shared-background");

if (backgroundElement) {
    function changeBackground() {
        currentBackground = (currentBackground + 1) % backgrounds.length;
        backgroundElement.style.backgroundImage = `url("${backgrounds[currentBackground]}")`;
    }

    changeBackground();
    setInterval(changeBackground, 3000);
}

// Ajuste para el scroll en videos.html
document.addEventListener('DOMContentLoaded', function() {
    var scrollDownButton = document.querySelector('.scroll-down a');
    if (scrollDownButton) {
        scrollDownButton.addEventListener('click', function(e) {
            e.preventDefault();
            var targetElement = document.getElementById('video-container');
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }
});
