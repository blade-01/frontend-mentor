// Variables
const input = document.querySelector("#input");
const filterList = document.querySelector(".filter-list");
const filter = document.querySelector(".filters");
const roles = document.querySelectorAll(".role p");
const clear = document.querySelector(".btn");
const close = document.querySelectorAll(".close");
const chiped = document.querySelector(".chiped");
const chips = document.querySelector(".chips");

// Loop through roles
roles.forEach((role) =>
  role.addEventListener("click", (e) => {
    // Show Output Box
    input.style.display = "flex";
    clear.style.display = "flex";
    filter.style.marginTop = "0rem";
    // Create Element
    const chiped = document.createElement("div");
    const p = document.createElement("p");
    // Set Attribute
    p.setAttribute("class", "chip");
    p.appendChild(document.createTextNode(role.innerText));
    chiped.setAttribute("class", "chiped");
    // Create close icon
    const svg = document.createElement("div");
    svg.setAttribute("class", "close");
    svg.innerHTML = `<svg class="close" xmlns="http://www.w3.org/2000/svg" width="14" height="14"> <path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z" /> </svg>`;
    svg.addEventListener("click", () => {
      chiped.remove();
    });
    // Append
    chiped.appendChild(p);
    chiped.appendChild(svg);
    chips.appendChild(chiped);
    // Clear all chips
    clear.addEventListener("click", () => {
      chiped.remove();
    });
    const filters = document.querySelectorAll(".filter--");
    filters.forEach((filter) => {
      const eachAttr = filter.querySelector(".role [data-role='backend']");
      if (filter.contains(eachAttr)) {
        console.log(filter);
        // filter.style.display = "initial";
      } else {
        console.log(234);
      }
    });
  })
);
// document.addEventListener("DOMContentLoaded", () => {
//   fetch("data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       let output = "";
//       data.forEach((dats) => {
//         output += `<div class="filter-- filter-1">
//         <div>
//             <img src="${dats.logo}" alt="" />
//             <div class="title">
//                 <p>
//                     ${dats.company} <span class="new">New!</span>
//                     <span class="featured">Featured</span>
//                 </p>
//             </div>
//             <div class="post">
//                 <h4>${dats.position}</h4>
//             </div>
//             <div class="location">
//                 <p>1d ago</p>
//                 <i class="fa fa-circle"></i>
//                 <p>${dats.contract}</p>
//                 <i class="fa fa-circle"></i>
//                 <p>${dats.location}</p>
//             </div>
//         </div>
//         <hr />
//         <div class="role">
//             <p>${dats.languages}</p>
//         </div>
//         </div>`;
//         //   console.log(dats.languages);
//         // const datas = data.filter((dat) => dat.role === "Frontend");
//         // console.log(datas);
//       });
//       document.querySelector(".filter-list").innerHTML = output;
//     });
// });
// input.addEventListener('input', () => inputData(input.value));

// Get Filter List
// const filter = document.querySelector('.filter-list');
// Get Filter from List
// const filterList = filter.querySelectorAll('.filter--');
// Loop through collection of list
// filterList.forEach((filter) => {
//     if (filter.innerHTML.indexOf(inputValue) > -1) {
//         filter.style.display = '';
//     } else {
//         filter.style.display = 'none';
//     }
// });
