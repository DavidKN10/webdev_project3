const coordinates = {
  // IIT coordinates 
  lat: 41.8367,
  lng: -87.626
}

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: coordinates,
    mapId: "map_id" 
  });

  
  const marker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: coordinates,
    title: "Illinois Institute of Technology"
  });
}
