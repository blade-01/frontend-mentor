const arrow = document.querySelector('.arrow');
const share = document.querySelector('.share');
arrow.addEventListener('click', () => {
    share.classList.toggle('show');
})