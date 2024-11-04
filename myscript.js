document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        root: null,
        threshold: 0.1,
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
// Toggle the navigation menu on mobile
document.getElementById('menuToggle').addEventListener('click', function() {
    const navList = document.getElementById('navList');
    navList.classList.toggle('active'); // Toggle 'active' class on click
});

// Get modal element
const visionModal = document.getElementById('visionModal');

// Get button that opens the modal
const visionButton = document.getElementById('visionButton');

// Get the <span> element that closes the modal
const closeVision = document.getElementById('closeVision');

// When the user clicks the button, open the modal 
visionButton.addEventListener('click', function() {
    visionModal.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
closeVision.addEventListener('click', function() {
    visionModal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target === visionModal) {
        visionModal.style.display = 'none';
    }
});
