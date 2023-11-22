// Add the following code to toggle the active class for the navigation links
const navLinks = document.querySelectorAll('#header ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});

// Modify the showSlide function to handle the video container
function showSlide(n) {
    const slides = document.getElementsByClassName("video-slide");

    if (n > slides.length) {
        currentSlide = 1;
    }

    if (n < 1) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide - 1].style.display = "block";
}

// Your existing changeSlide and showSlide functions go here