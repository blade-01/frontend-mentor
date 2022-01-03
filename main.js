// Variables
const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
const form = document.querySelector(".form");
const select = document.querySelector(".select");
const selectOptions = document.querySelectorAll(".selectdrop li");

// Toggler Event
toggle.addEventListener("click", () => {
  toggle.classList.toggle("display");
  body.classList.toggle("dark");
});

// Toggle Select
select.addEventListener("click", () => {
  select.classList.toggle("show");
});

// Initial DOM load
document.addEventListener("DOMContentLoaded", getData);

// Get Data from API
function getData() {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => {
      if (res.status != 200) {
        console.log("This is not a valid country");
        throw Error(res.statusText);
      } else {
        return res.json();
      }
    })
    .then((data) => {
      let output = "";
      data.forEach((dat) => {
        output += `<div class="card">
            <div class="card-img">
              <img src="${
                dat.flags.svg
              }" alt="country-img" loading="lazy" class="img"/>
            </div>
            <div class="card-body">
              <h4>${dat.name.common}</h4>
              <p><b>Population:</b> <span>${dat.population}</span></p>
              <p><b>Region:</b> <span>${dat.region}</span></p>
              <p><b>Capital:</b> <span>${
                dat.capital ? dat.capital : `Captial Not Found`
              }</span></p>
            </div>
          </div>`;
      });
      document.querySelector(".cards").innerHTML = output;
      getDetails();
    });
}

// Input - Filter by Country Name
form.addEventListener("input", filterInput);
function filterInput() {
  const inputValue = document.querySelector(".input").value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const countryName = card.lastElementChild.firstElementChild.textContent;
    if (countryName.toLowerCase().indexOf(inputValue) !== -1) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}

// Select - Filter by Region
function filterData() {
  selectOptions.forEach((select) => {
    select.addEventListener("click", () => {
      const region = select.textContent;
      document.querySelector(".select p span").innerText = region;
      const cards = document.querySelectorAll(".card");
      cards.forEach((card) => {
        const regionName =
          card.lastElementChild.firstElementChild.nextElementSibling
            .nextElementSibling.lastElementChild.textContent;
        if (region === regionName) {
          card.style.display = "";
        } else if (region == "All") {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}
filterData(); // Call filter by region function

// Get More Details
function getDetails() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const details = card.lastElementChild.firstElementChild.textContent;
      fetch(`https://restcountries.com/v3.1/name/${details}`)
        .then((res) => {
          if (res.status !== 200) {
            console.log("There seems to be an error");
            throw Error(res.statusText);
          } else {
            return res.json();
          }
        })
        .then((data) => {
          let output = "";
          data.forEach((dat) => {
            let bord = "";
            dat.borders.forEach((border) => {
              bord += `<p>${border}</p>`;
            });
            output += `
            <div class="back">
              <i class="fa fa-arrow-left left"></i> Back
            </div>
            <div class="content">
              <img src="${
                dat.flag
              }" alt="country-img" loading="lazy" class="county" />
              <div class="content-1">
                <h4>${dat.name}</h4>
                <div class="native-level">
                  <div class="native">
                    <p>Native Name:<span> ${dat.nativeName}</span></p>
                    <p>Population:<span> ${dat.population}</span></p>
                    <p>Region:<span> ${dat.region}</span></p>
                    <p>Sub Region:<span> ${dat.subregion}</span></p>
                    <p>Capital:<span> ${dat.capital}</span></p>
                  </div>
                  <div class="level">
                    <p>Top Level Domain:<span> ${
                      dat.topLevelDomain[0]
                    }</span></p>
                    <p>Currencies:<span> ${dat.currencies[0].name}</span></p>
                    <p>Language:<span> ${dat.languages.map(
                      (lang) => lang.name
                    )}</span></p>
                  </div>
                </div>
                <div class="border">
                  <p><b>Border Countries:</b></p>
                  <div class="border-country">
                    ${bord ? bord : `No Border Country`}
                  </div>
                </div>
              </div>
            </div>
          `;
          });
          document.querySelector(".single-page-content").innerHTML = output;
          border();
          backButton();
        });
      document.querySelector(".single-page").style.left = "0";
      document.querySelector(".cards").style.display = "none";
      document.querySelector(".form").style.display = "none";
    });
  });
}

// Get Data from border countries
function border() {
  const bord = document.querySelectorAll(".border-country p");
  bord.forEach((bor) => {
    bor.addEventListener("click", () => {
      const border = bor.textContent;
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then((data) => {
          createNewDetails(data);
        })
        .catch((err) => console.log(err));
    });
  });
}

// Remove More Details when back button is clicked
function backButton() {
  const singlePage = document.querySelector(".single-page");
  singlePage.addEventListener("click", (e) => {
    if (e.target.className == "back") {
      singlePage.style.left = "-100%";
      document.querySelector(".cards").style.display = "";
      document.querySelector(".form").style.display = "";
    }
  });
}

function createNewDetails(data) {
  let output = "";
  let bord = "";
  data.borders.forEach((border) => {
    bord += `<p>${border}</p>`;
  });
  output += `
    <div class="back">
      <i class="fa fa-arrow-left left"></i> Back
    </div>
    <div class="content">
      <img src="${data.flag}" alt="country-img" loading="lazy" class="county" />
      <div class="content-1">
        <h4>${data.name}</h4>
        <div class="native-level">
          <div class="native">
            <p>Native Name:<span> ${data.nativeName}</span></p>
            <p>Population:<span> ${data.population}</span></p>
            <p>Region:<span> ${data.region}</span></p>
            <p>Sub Region:<span> ${data.subregion}</span></p>
            <p>Capital:<span> ${data.capital}</span></p>
          </div>
          <div class="level">
            <p>Top Level Domain:<span> ${data.topLevelDomain[0]}</span></p>
            <p>Currencies:<span> ${data.currencies[0].name}</span></p>
            <p>Language:<span> ${data.languages.map(
              (lang) => lang.name
            )}</span></p>
          </div>
        </div>
        <div class="border">
          <p><b>Border Countries:</b></p>
          <div class="border-country">
            ${bord ? bord : `No Border Country`}
          </div>
        </div>
      </div>
    </div>
  `;
  document.querySelector(".single-page-content").innerHTML = output;
  // Show Border Countries
  border();
  backButton();
}
