// Variables
const toggle = document.querySelector('.toggle');
const closed = document.querySelector('.close');
const menu = document.querySelector('.menu');
const slides = document.querySelectorAll('.slide');
const showcaseContents = document.querySelectorAll('.showcase-content');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let intervalTime = 5000;

// Toggle
toggle.addEventListener('click', () => {
    menu.style.height = "100vh";
});

menu.addEventListener('click', (e) => {
    if (e.classList = 'close') {
        menu.style.height = '0';
    }
})


// Next Slide
const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    const currentTwo = document.querySelector('.current-2');
    // Remove current class
    current.classList.remove('current');
    currentTwo.classList.remove('current-2');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
        currentTwo.nextElementSibling.classList.add('current-2');
    } else {
        // Add current to start
        slides[0].classList.add('current');
        showcaseContents[0].classList.add('current-2');
    }
    setTimeout(() => current.classList.remove('current'));
    setTimeout(() => current.classList.remove('current-2'));
};

// Previous Slide
const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    const currentTwo = document.querySelector('.current-2');
    // Remove current class
    current.classList.remove('current');
    currentTwo.classList.remove('current-2');
    // Check for next slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
        currentTwo.previousElementSibling.classList.add('current-2');
    } else {
        // Add current to start
        slides[slides.length - 1].classList.add('current');
        showcaseContents[showcaseContents.length - 1].classList.add('current-2');
    }
    setTimeout(() => current.classList.remove('current'));
    setTimeout(() => current.classList.remove('current-2'));
};

// Carousel Init Desktop
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});