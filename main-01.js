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

// Form Event - Filter by form
form.addEventListener("input", getData);
function getData(e) {
  e.preventDefault();
  const inputValue = document.querySelector(".input").value;
  url = `https://restcountries.eu/rest/v2/name/${inputValue}`;
  createCountry(url);
}

// Filter by Region
selectOptions.forEach((select) => {
  select.addEventListener("click", () => {
    const region = select.textContent;
    document.querySelector(".select p span").innerText = region;
    url = `https://restcountries.eu/rest/v2/region/${region}`;
    createCountry(url);
  });
});

// Initial DOM load
document.addEventListener("DOMContentLoaded", () => {
  let url = "https://restcountries.eu/rest/v2/all";
  createCountry(url);
});

function createCountry(url) {
  fetch(`${url}`)
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
                  dat.flag
                }" alt="country-img" loading="lazy" class="img"/>
              </div>
              <div class="card-body">
                <h4>${dat.name}</h4>
                <p><b>Population:</b> <span>${dat.population}</span></p>
                <p><b>Region:</b> <span>${dat.region}</span></p>
                <p><b>Capital:</b> <span>${
                  dat.capital ? dat.capital : `Captial Not Found`
                }</span></p>
              </div>
            </div>`;
      });
      document.querySelector(".cards").innerHTML = output;
      // Click through each country card
      output = document.querySelectorAll(".card");
      output.forEach((out) => {
        out.addEventListener("click", () => {
          const details = out.lastElementChild.firstElementChild.textContent;
          fetch(`https://restcountries.eu/rest/v2/name/${details}
      `)
            .then((res) => res.json())
            .then((data) => {
              createDetails(data);
            });
          document.querySelector(".single-page").style.left = "0";
          document.querySelector(".cards").style.display = "none";
          document.querySelector(".form").style.display = "none";
        });
      });
    });
}

function createDetails(data) {
  let output = "";
  data.forEach((dat) => {
    let html = "";
    dat.borders.forEach((border) => {
      // Create html template
      html += `<p>${border}</p>`;
    });
    output += `
    <div class="back">
      <i class="fa fa-arrow-left left"></i> Back
    </div>
    <div class="content">
      <img src="${dat.flag}" alt="country-img" loading="lazy" class="county" />
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
            <p>Top Level Domain:<span> ${dat.topLevelDomain[0]}</span></p>
            <p>Currencies:<span> ${dat.currencies[0].name}</span></p>
            <p>Language:<span> ${dat.languages.map(
              (lang) => lang.name
            )}</span></p>
          </div>
        </div>
        <div class="border">
          <p><b>Border Countries:</b></p>
          <div class="border-country">
            ${html ? html : `No Border Country`}
          </div>
        </div>
      </div>
    </div>
  `;
  });
  document.querySelector(".single-page-content").innerHTML = output;
  // Click through each Border Countries
  border();
  backButton();
}

function backButton() {
  // Activate back Button
  const singlePage = document.querySelector(".single-page");
  singlePage.addEventListener("click", (e) => {
    if (e.target.className == "back") {
      singlePage.style.left = "-100%";
      document.querySelector(".cards").style.display = "";
      document.querySelector(".form").style.display = "";
    }
  });
}

function border() {
  const bord = document.querySelectorAll(".border-country p");
  bord.forEach((bor) => {
    bor.addEventListener("click", () => {
      const border = bor.textContent;
      fetch(`https://restcountries.eu/rest/v2/alpha/${border}`)
        .then((res) => res.json())
        .then((data) => {
          createNewDetails(data);
        })
        .catch((err) => console.log(err));
    });
  });
}

function createNewDetails(data) {
  let output = "";
  let html = "";
  data.borders.forEach((border) => {
    // Create html template
    html += `<p>${border}</p>`;
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
            ${html ? html : `No Border Country`}
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