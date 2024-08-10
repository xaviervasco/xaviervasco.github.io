// JavaScript for gallery functionality
const galleryImage = document.getElementById('galleryImage');
let currentImageIndex = 0;
let popupOpen = false;

// Example array of image sources
const imageSources = [
    'https://res.cloudinary.com/dwhkm1mmn/image/upload/v1716015860/Mastershot_aux4j6.png',
    'https://res.cloudinary.com/dwhkm1mmn/image/upload/v1716016029/Close_library_v2j3a1.png'
];

// Function to check if the current page is the home page
function isHomePage() {
    return document.title === 'Xavier Vasco'; // Adjust the title to match your home page title
}

if (isHomePage()) {
    function showNextImage() {
        if (!popupOpen) {
            currentImageIndex = (currentImageIndex + 1) % imageSources.length;
            galleryImage.src = imageSources[currentImageIndex];
        }
    }

    // Initially show the first image
    showNextImage();

    // Change image every 5 seconds
    setInterval(showNextImage, 5000);
}

// Modal close function
function modalClose(popup) {
    popup.style.display = 'none';
}

// Education Link Functionality
const educationLink = document.getElementById('education-link');
const educationPopup = document.getElementById('education-popup');
const contactLink = document.getElementById('contact-link');
const contactPopup = document.getElementById('contact-popup');

function showPopup(popup) {
    popup.style.display = 'flex';
    popupOpen = true; // Set flag to true when a popup is shown
    setTimeout(() => popup.classList.add('show'), 10); // Slight delay to allow for transition
}

function hidePopup(popup) {
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none';
        popupOpen = false; // Set flag to false when a popup is hidden
    }, 500); // Match the transition duration
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

// Pull Tab and Sidebar functionality
const pullTab = document.getElementById('pullTab');
const sidebar = document.getElementById('sidebar');

function toggleSidebar() {
    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
    } else {
        sidebar.classList.add('show');
    }
}

// Only add event listener if the screen width is less than 600px
function checkScreenWidth() {
    if (window.innerWidth <= 600) {
        pullTab.addEventListener('click', toggleSidebar);
    } else {
        pullTab.removeEventListener('click', toggleSidebar);
        sidebar.classList.remove('show'); // Ensure sidebar is hidden
    }
}

// Initial check
checkScreenWidth();

// Re-check when the window is resized
window.addEventListener('resize', checkScreenWidth);