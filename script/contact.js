'use strict'

var form = document.querySelector("form.contact")
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    let data = {}
    for (let [key, value] of formData.entries()) {
        data[key] = value
    }

    sendMail(data)
});

function sendMail(data) {
    emailjs.send("service_3qi5l6s", "template_69hszcd", data).then(alert("email sended !!!"))
}

// open streetmap
// var city = [5.6257,10.25596]
// var map = L.map('map').setView(city, 13) //Paris

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'OpenStreetMap Contributors'
// }).addTo(map)

// L.maker(city).addTo(map)
//     .bindPopup('Mbouda, Cameroun')
//     .openPopup();


//here.com
var platform = new H.service.Platform({
    apiKey: 'w_K4l_gm5xEZmr14LM4sJKYfkrDY2LmtD8FEGiHfD4I'
})

var maptypes = platform.createDefaultLayers();
var map = new H.Map(
    document.getElementById('map'),
    maptypes.vector.normal.map,
    {
        zoom: 14,
        center: { lat: 5.6257, lng: 10.25596 }
    }
);

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, maptypes);

var marker = new H.map.Marker({ lat: 5.6257, lng: 10.25596 })
map.addObject(marker)