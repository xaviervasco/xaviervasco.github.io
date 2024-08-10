// JavaScript for gallery functionality
const galleryImage = document.getElementById('galleryImage');
let currentImageIndex = 0;
let popupOpen = false;

// Example array of image sources
const imageSources = [
    'https://res.cloudinary.com/dwhkm1mmn/image/upload/v1716015860/Mastershot_aux4j6.png',
    'https://res.cloudinary.com/dwhkm1mmn/image/upload/v1716016029/Close_library_v2j3a1.png'
];

function isHomePage() {
    return document.title === 'Xavier Vasco';
}

if (isHomePage()) {
    function showNextImage() {
        if (!popupOpen) {
            currentImageIndex = (currentImageIndex + 1) % imageSources.length;
            galleryImage.src = imageSources[currentImageIndex];
        }
    }

    showNextImage();
    setInterval(showNextImage, 5000);
}

function modalClose(popup) {
    popup.style.display = 'none';
}

const educationLink = document.getElementById('education-link');
const educationPopup = document.getElementById('education-popup');
const contactLink = document.getElementById('contact-link');
const contactPopup = document.getElementById('contact-popup');

function showPopup(popup) {
    popup.style.display = 'flex';
    popupOpen = true;
    setTimeout(() => popup.classList.add('show'), 10);
}

function hidePopup(popup) {
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none';
        popupOpen = false;
    }, 500);
}

educationLink.addEventListener('click', function(event) {
    event.preventDefault();
    showPopup(educationPopup);
});

educationPopup.addEventListener('click', function(event) {
    if (event.target === this) {
        hidePopup(educationPopup);
    }
});

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    showPopup(contactPopup);
});

contactPopup.addEventListener('click', function(event) {
    if (event.target === this) {
        hidePopup(contactPopup);
    }
});

document.body.addEventListener('click', function(event) {
    if (!event.target.closest('.education-content') && event.target !== educationLink) {
        hidePopup(educationPopup);
    }
    if (!event.target.closest('.contact-content') && event.target !== contactLink) {
        hidePopup(contactPopup);
    }
});

// Hamburger menu toggle functionality
const pullTab = document.getElementById('pull-tab');
const sidebar = document.getElementById('sidebar');

pullTab.addEventListener('click', function() {
    console.log("Hamburger menu clicked!"); // Debugging line
    sidebar.classList.toggle('open');
    console.log("Sidebar classes: ", sidebar.classList); // Debugging line to check class toggling
});