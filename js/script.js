const iitCoordinates = {
  // IIT coordinates 
  lat: 41.8367,
  lng: -87.626
}



function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: iitCoordinates,
    mapId: "map_id" 
  });

  const traffic = new google.maps.TrafficLayer().setMap(map);

  
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

