const coordinates = {
  // IIT coordinates 
  lat: 41.8367,
  lng: -87.626
}

function initMap() {
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: coordinates 
  });

  /*
  new google.maps.Marker({
    position: coordinates,
    map: map,
    title: "Hello!"
  });
  */
}