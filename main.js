const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.getElementsByTagName('input');
    const errMsg = document.getElementsByClassName('err');
    for (let i = 0; i < input.length; ++i) {
        if (input[i].value == '') {
            errMsg[i].style.display = 'block';
            input[i].style.background = 'url(images/icon-error.svg) right 20px center no-repeat';

        } else {
            errMsg[i].style.display = 'none';
            input[i].style.background = '';
        }
    }
});