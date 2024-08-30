// script.js

document.getElementById('burger-menu').addEventListener('click', function() {
    var menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.classList.toggle('visible');
});

document.getElementById('menu-overlay').addEventListener('click', function(event) {
    // Only close the menu if the user clicks outside the nav element
    if (event.target === this) {
        this.classList.remove('visible');
    }
});

let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-image');

function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 2000); // Change image every 2 seconds

