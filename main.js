const amount = document.querySelectorAll('.amount');
const active = document.querySelectorAll('.active');
const toggle = document.querySelector('#toggle');
toggle.addEventListener('click', () => {
    amount.forEach((amount) => {
        active.forEach((active) => {
            active.classList.toggle('unshow-active');
        })
        amount.classList.toggle('show-amount');
    })
})