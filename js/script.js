let map;
let trafficLayer;

const iitCoordinates = {
  // IIT coordinates 
  lat: 41.8367,
  lng: -87.626
}

function initMap() {

  // create map
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: iitCoordinates,
    mapId: "map_id" 
  });


  // traffic layer
  trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  const trafficButton = document.getElementById("toggle-traffic");
  if (trafficButton) {
    let trafficOn = true;

    trafficButton.addEventListener("click", () => {
      trafficOn = !trafficOn;
      trafficLayer.setMap(trafficOn ? map : null);
      trafficButton.textContent = trafficOn ? "Hide Traffic" : "Show Traffic";
    });
  }
 
  // marker with info window
  const marker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: iitCoordinates,
    title: "Illinois Institute of Technology"
  });

  const info = new google.maps.InfoWindow({
    content: `<img src="img/iit.jpg">
              <h3>Illinois Institute of Technology</h3>
              <p>This is the university I go to.</p>
              <style>
                h3 {
                  color:black
                }

                p {
                  color:black
                }

                img {
                  height: auto;
                  width: 125px;
                }
              </style>
              `,
  });

  marker.addListener("click", () => {
    info.open({
      anchor: marker,
      map
    });
  }); 

  // polyline route through IIT and some Chicago landmarks
  const routeCoordinates = [
    { lat: 41.8781, lng: -87.6298 }, // Downtown
    { lat: 41.8827, lng: -87.6233 }, // Millenium Park
    { lat: 41.8916, lng: -87.6079 },  // Navy Pier
    iitCoordinates
  ];

  const routePolyline = new google.maps.Polyline({
    path: routeCoordinates,
    map,
    strokeColor: "#ff0000",
    strokeOpacity: 1.0,
    strokeWeight: 4
  }); 

  // questions button
  const questionsButton = document.getElementById("questions-button");
  if (questionsButton) {
    questionsButton.addEventListener("click", () => {
      alert("If you have questions, contact me at:\ndavidrs23178@gmail.com");
    });
  }
}

