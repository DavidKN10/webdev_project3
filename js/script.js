let map;
let trafficLayer;

const IIT_COORDINATES = {
  lat: 41.8367,
  lng: -87.626
};

const ROUTE_COORDINATES = [
  { lat: 41.8781, lng: -87.6298 },  // Downtown
  { lat: 41.8827, lng: -87.6233 },  // Millenium Park
  { lat: 41.8916, lng: -87.6079 },  // Navy Pier
  IIT_COORDINATES
];

function initMap() {

  map = createMap(IIT_COORDINATES);
  trafficLayer = createTrafficLayer(map);

  setupTrafficControl(map, trafficLayer);
  setupMapTypeControl(map);
  addMarker(map,
            IIT_COORDINATES,
            "Illinois Institute of Technology",
            "This is the university I go to.",
            "img/iit.jpg"
  );
  addRoute(map, ROUTE_COORDINATES);

  // questions button
  const questionsButton = document.getElementById("questions-button");
  if (questionsButton) {
    questionsButton.addEventListener("click", () => {
      alert("If you have questions, contact me at:\ndavidrs23178@gmail.com");
    });
  }
}

function createMap(center) {
  return new google.maps.Map(document.getElementById("map"), {
    center,
    zoom: 13,
    mapId: "map_id",
    mapTypeId: "roadmap"
  });
}

function createTrafficLayer(map) {
  const layer = new google.maps.TrafficLayer();
  layer.setMap(map);
  return layer;
}

function setupTrafficControl(map, trafficLayer) {
  const button = document.getElementById("toggle-traffic");
  if (!button) {
    return;
  }

  let trafficOn = true;
  button.addEventListener("click", () => {
    trafficOn = !trafficOn;
    trafficLayer.setMap(trafficOn ? map : null);
    button.textContent = trafficOn ? "Hide Traffic" : "Show Traffic";
  });  
}

function setupMapTypeControl(map) {
  const button = document.getElementById("map-type");
  if (!button) {
    return;
  }

  const types = ["roadmap", "hybrid", "terrain"];
  let index = 0;

  button.textContent = types[index];

  button.addEventListener("click", () => {
    index = (index + 1) % types.length;
    const nextType = types[index];

    map.setMapTypeId(nextType);
    button.textContent = nextType;
  });
}

function addMarker(map, position, title, description, imagePath) {
  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position,
    title: title 
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `
      <img src="${imagePath}">
      <h3>${title}</h3>
      <p>${description}</p>
      <style>
        h3 {
          color: black; 
        }

        p {
          color: black; 
        }

        img {
          height: auto;
          width: 125px; 
        }
      </style>
    `
  });

  marker.addListener("click", () => {
    infoWindow.open({
      anchor: marker,
      map
    });
  });

  return marker;
}

function addRoute(map, coordinates) {
  const polyline = new google.maps.Polyline({
    path: coordinates,
    map,
    strokeColor: "#ff0000",
    strokeOpacity: 1.0,
    strokeWeight: 4
  });

  return polyline;
}