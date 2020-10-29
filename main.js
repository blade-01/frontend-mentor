// Variables
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const cards = document.querySelectorAll('.card');
const dots = document.querySelectorAll('.dot');
const errMsg = document.querySelector('.err-msg');
const form = document.querySelector('form');
const input = document.querySelector('input');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Toggle
toggle.addEventListener('click', () => {
    toggle.classList.toggle('display');
    menu.classList.toggle('menu-visible');
});

// Select Item
function selectItem() {
    // Remove Show
    removeCard();
    // Remove Dot Background
    removeBackground();
    // Add Dot Background
    this.classList.add('active');
    // Grab Show From DOM
    const cardContent = document.querySelector(`.${this.id}-current`);
    cardContent.classList.add('current');
};


// Remove Dot Background
function removeBackground() {
    dots.forEach(dot => dot.classList.remove('active'))
};

// Remove Show
function removeCard() {
    cards.forEach(card => card.classList.remove('current'))
};

// Carousel Init Mobile
dots.forEach(dot => dot.addEventListener('click', selectItem));

// Next Slide
const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        cards[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Previous Slide
const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for previous slide
    if (current.previousElementSibling) {
        // Add current to previous sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to start
        cards[cards.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Carousel Init Desktop
next.addEventListener('click', e => {
    nextSlide();
});

prev.addEventListener('click', e => {
    prevSlide();
});

// Form Validation
form.addEventListener('submit', (e) => {
    // Prevent Default
    e.preventDefault();
    const inputValue = input.value;
    // Regular Expression (regex)
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex = new RegExp(mailformat);
    if (inputValue.match(regex)) {
        errMsg.style.display = 'none';
        document.querySelector('input').value = '';
    } else {
        errMsg.style.display = 'block';

    }
});