// Variables
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const errMsg = document.querySelector('.err-msg');
const form = document.querySelector('form');
const input = document.querySelector('input');

// Toggle
toggle.addEventListener('click', () => {
    toggle.classList.toggle('display');
    menu.classList.toggle('menu-visible');
});

// Carousel Init
$(document).ready(function() {
    const cards = $('.cards');
    cards.owlCarousel({
        items: 3,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        loop: true,
        center: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    });
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