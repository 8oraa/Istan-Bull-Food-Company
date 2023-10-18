function initMap() {
  var location = { lat: 40.7128, lng: -74.0060 }; // Konum koordinatlarını burada ayarlayın
  var map = new google.maps.Map(document.getElementById('map'), {
      center: location,
      zoom: 15
  });

  var marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Konumunuz'
  });
}