var carolinaHall = [35.911276,-79.05004];


// var marker = L.marker(carolinaHall).bindPopup("<b>Carolina Hall</b>").addTo(map);
var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        })

    

var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#7BAFD4",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
var Icon = L.icon({    // notice the L.icon which is a Leaflet object with properties
    iconUrl: './open_book.png',   
      // this points to a jpg image obtained from the internet
    iconSize: [100,100], // size of the icon
    popupAnchor: [0,0] // where the icon is located relative to the lat lon of the point. 
    });

//L.circleMarker(carolinaHall,geojsonMarkerOptions).addTo(map);

// var longitudeWpt0 = waypoints.features[0].geometry.coordinates[0]
// var latitudeWpt0 = waypoints.features[0].geometry.coordinates[1]
// L.geoJSON(waypoints).addTo(map);

// var firstWaypoint = waypoints.features[0].geometry.coordinates.slice().reverse()
// L.circleMarker(firstWaypoint,geojsonMarkerOptions).bindPopup(waypoints.features[0].properties.note ).addTo(map);
var markers = L.geoJSON(waypoints, {
    pointToLayer: function (feature, latlng) {
        console.log(feature)
        return L.marker(latlng, {icon: Icon}).bindPopup(feature.properties.name );
    }
}).addTo(map);

var baseLayers = {
    "OpenStreetMap": OSM,
    "ESRI": Esri_WorldImagery
    };
var overlayMaps = {
    "Circles": markers
};

var layerControl = L.control.layers(baseLayers,overlayMaps).addTo(map);
