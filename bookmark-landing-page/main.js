// Variables
const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const tabs = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab-content');
const ques = document.querySelectorAll('.ques');
const ans = document.querySelectorAll('.ans');
const svg = document.querySelectorAll('.svg');
const form = document.querySelector('form');
const input = document.querySelector('#input');
const errMsg = document.querySelector('.err-msg');
const errIcon = document.querySelector('.icon-err');

// Init Menu
toggle.addEventListener('click', () => {
    menu.style.height = '100vh';
});
close.addEventListener('click', () => {
    menu.style.height = '0';
});

// Init Tab
tabs.forEach(tab => tab.addEventListener('click', selectItem));

// Select tab content
function selectItem(e) {
    // Remove Border
    removeBorder();
    // Remove Tab Content
    removeContent();
    // Add border to current tab
    this.classList.add('tab-border');
    // Grab Content from DOM
    const tabContent = document.querySelector(`.${this.id}-content`);
    // Add Show Class
    tabContent.classList.add('show');
}
// Remove Border
function removeBorder() {
    tabs.forEach(tab => tab.classList.remove('tab-border'));
}
// Remove Tab Content
function removeContent() {
    tabContent.forEach(content => content.classList.remove('show'))
}


// Init FAQ
ques.forEach(que => que.addEventListener('click', queTab));

// Select Questions Tab
function queTab(e) {
    // Remove Rotate SVG
    removeRotate();
    // Remove Show Answer
    removeAns();
    // Grab Rotate from DOM
    const rotateTab = document.querySelector(`.${this.id}-rotate`);
    // Add Rotate SVG
    rotateTab.classList.add('rotate');
    // Grab Answer from DOM
    const ansTab = document.querySelector(`.${this.id}-ans`);
    // Add Show Answer
    ansTab.classList.add('show-ans');
}

// Remove Ans
function removeAns() {
    ans.forEach(ans => ans.classList.remove('show-ans'));
}
// Remove Rotate SVG
function removeRotate() {
    svg.forEach(svg => svg.classList.remove('rotate'));
}

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
        input.style.border = 'none';
        errIcon.style.display = 'none';
        document.querySelector('#input').value = '';
    } else {
        errMsg.style.display = 'block';
        errIcon.style.display = 'block';
        input.style.border = 'solid 2px var(--soft-red)';
    }
})