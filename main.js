// Variables
const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const ipAddress = document.querySelector('.ip');
const locations = document.querySelector('.location');
const timezone = document.querySelector('.timezone');
const isp = document.querySelector('.isp');

// Map Init
let displayMap = (lat, long) => {
    var container = L.DomUtil.get('map');
    if (container != null) {
        container._leaflet_id = null;
    }

    let map = L.map('map', {
        zoomControl: false,
    });
    L.control.zoom({
        position: 'bottomright',
    });
    map.setView([lat, long], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    let myIcon = L.icon({
        iconUrl: './images/icon-location.svg',
        iconAnchor: [lat, long],
    });

    let marker = L.marker([lat, long], { icon: myIcon }).addTo(map);
};

// Fetch
let getIpDetails = (ip) => {
    fetch(
            `https://geo.ipify.org/api/v1?apiKey=at_cDRwvU8HCGLZQZIcIgdoTS5NJMYf1&ipAddress=${ip}`
        )
        .then((res) => res.json())
        .then((data) => {
            ipAddress.innerText = data.ip;
            locations.innerText = `${data.location.city}, ${data.location.country}`;
            timezone.innerText = `UTC ${data.location.timezone}`;
            isp.innerText = data.isp;
            displayMap(data.location.lat, data.location.lng);
        });
};

// Event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    getIpDetails(input.value);
    input.value = '';
});
btn.addEventListener('click', getIpDetails(input.value));