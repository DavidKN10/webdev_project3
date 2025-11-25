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
    content: `<h3>Illinois Institute of Technology</h3>
              <p>This is the university I go to.</p>
              <style>h3{color:black}p{color:black}</style>`,
  });

  marker.addListener("click", () => {
    info.open({
      anchor: marker,
      map
    });
  }); 
}

