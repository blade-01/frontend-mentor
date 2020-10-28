const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailValue = email.value;

    if (!validateEmail(emailValue)) {
        form.classList.add('err');
    } else {
        form.classList.remove('err');

    }

})

function validateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return mailformat.test(String(email).toLowerCase());
}