const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.sideNav');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('display');
    nav.classList.toggle('sideNav-visible');
});