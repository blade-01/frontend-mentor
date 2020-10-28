// Variables
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const form = document.querySelector('form');
const sectionOne = document.querySelector(".shorten");
const shorten = document.querySelector(".shorten-content");

// Event

// Toggle
toggle.addEventListener('click', () => {
    toggle.classList.toggle('display')
    menu.classList.toggle('display');
});

// Form
const shortenedLinks = document.querySelector(".shortened-links");
const errorMsg = document.querySelector('.error-msg');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    if (input.value != "") {
        const newShortenedLink = document.createElement("div");
        newShortenedLink.setAttribute('class', 'shorten-link')

        const oldLink = document.createElement("div");
        oldLink.setAttribute('class', 'old-link');
        oldLink.innerText = input.value;

        const newLink = document.createElement("div");
        newLink.setAttribute('class', 'new-link');
        const newLinkDiv = document.createElement("div");
        newLinkDiv.innerText = "https://rel.ink/" + getrandom();

        const newLinkBtn = document.createElement("button");
        newLinkBtn.innerText = "Copy";
        newLinkBtn.addEventListener('click', () => {
            newLinkBtn.setAttribute('class', 'clicked');
            newLinkBtn.innerText = "Copied!";
        })

        newLink.appendChild(newLinkDiv);
        newLink.appendChild(newLinkBtn);

        newShortenedLink.appendChild(oldLink);
        newShortenedLink.appendChild(newLink);

        shortenedLinks.insertBefore(newShortenedLink, shortenedLinks.firstElementChild);
        errorMsg.style.display = "none";
        input.value = "";
        input.style.border = "none";
    } else {
        input.style.border = "2px solid #ff5656";
        errorMsg.style.display = "block";
    }
});

function getrandom() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}