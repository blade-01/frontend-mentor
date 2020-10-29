// Form Validation
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    // Regular Expression (regex)
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex = new RegExp(mailformat);

    if (!email.match(regex)) {
        document.querySelector('.err-msg').style.display = 'block';
        document.querySelector('.err-msg').style.marginBottom = '2rem';
        document.querySelector('#email').style.border = '1px solid var(--light-red)';
    } else {
        document.querySelector('.err-msg').style.display = 'none';
        document.querySelector('.btn').style.marginTop = '';
        document.querySelector('#email').style.border = '';
    }

});