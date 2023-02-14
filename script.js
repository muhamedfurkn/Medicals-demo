
var map = L.map('map').setView([39.750359, 37.015598], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([39.750359, 37.015598]).addTo(map);
var circle = L.circle([39.750359, 37.015598], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

function changeMap(lat, lang) {
    var newLatLng = new L.LatLng(lat, lang);
    marker.setLatLng(newLatLng)
    circle.setLatLng(newLatLng)
    map.setView(newLatLng)

    switch (lat) {
        case 39.7591477:
            document.getElementById("medicalText").innerHTML = "London Medical"
            break;
        case 38.356869:
            document.getElementById("medicalText").innerHTML = "Lang Medical"
            break;
        case 41.015137:
            document.getElementById("medicalText").innerHTML = "Street Medical"
            break;
         case 39.925533:
                document.getElementById("medicalText").innerHTML = "Health Hospital"
            break;
        case 51.503399:
            document.getElementById("medicalText").innerHTML = "ST.Jhon Hospital"
            break;
        case  41.934307:
            document.getElementById("medicalText").innerHTML = "Area Hospital"
        
               
    default:
            break;
    }
}