const input = document.querySelector('#input');
const clear = document.querySelector('.btn');
const filterList = document.querySelector('.filter-list');

// // Search data.json and filter it
// const inputData = async inputText => {
//     const res = await fetch('./data.json');
//     const data = await res.json();

//     // Get matches to current text input
//     let matches = data.filter(data => {
//         const regex = new RegExp(`^${inputText}`, 'gi');
//         return data.position.match(regex);
//     });

//     if (inputText.length === 0) {
//         matches = [];
//         filterList = '';
//     }

//     outputHtml(matches);
// };

// // Show results in HTML
// const outputHtml = matches => {
//     if (matches.length > 0) {
//         const result = matches.map(match => `<div class="filter-- filter-1">
//         <div>
//             <img src="${match.logo}" alt="">
//             <li class="title">
//                 <p>${match.company} <span class="new">${match.new}</span> <span class="featured">${match.featured}</span></p>
//             </li>
//             <li class="post">
//                 <h4>${match.position}</h4>
//             </li>
//             <li class="location">
//                 <p>
//                 ${match.postedAt}
//                     <span><i class="fa fa-circle"></i></span> ${match.contract}
//                     <span><i class="fa fa-circle"></i></span> ${match.location}
//                 </p>
//             </li>
//         </div>
//         <hr>
//         <div class="role">
//         <p>${match.role}</p>
//         <p>${match.level}</p>
//         <p>${match.languages}</p>
//         <p>${match.tools}</p>
//         </div>
//         </div>`).join('');

//         filterList.innerHTML = result;
//     }
// };

// input.addEventListener('input', () => inputData(input.value));

input.addEventListener('input', () => {
    // input.style.background = 'url(./images/icon-remove.svg) right 20px center no-repeat';
    // input.style.background = '#ddd';
    // Get value of input
    const inputValue = document.querySelector('#input').value;
    input.style.padding = '1rem';
    input.style.color = 'var(--desaturated-dark-cyan)';
    input.style.fontWeight = 'bolder';
    // Get Filter List
    const filter = document.querySelector('.filter-list');
    // Get Filter from List
    const filterList = filter.querySelectorAll('.filter--');
    // Loop through collection of list
    filterList.forEach((filter) => {
        if (filter.innerHTML.indexOf(inputValue) > -1) {
            filter.style.display = '';
        } else {
            filter.style.display = 'none';
        }
    })
});

clear.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#input').value = '';
})