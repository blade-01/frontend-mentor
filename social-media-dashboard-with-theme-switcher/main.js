const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
    body.classList.toggle('white-bg');
});

// Counter
const number = document.querySelectorAll('.number');
const speed = 200;

number.forEach(number => {
    const updateNumber = () => {
        const target = +number.getAttribute('data-target');
        const numb = +number.innerText;

        const inc = target / speed;

        if (numb < target) {
            number.innerText = Math.ceil(numb + inc);
            setTimeout(updateNumber, 1);
        } else {
            numb.innerText = target;
        }
    }
    updateNumber();
});