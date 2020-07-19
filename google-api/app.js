var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -7.3327792, lng: 108.2332176 },
    zoom: 13
  });
  var myLatLng = {lat:-7.3327792, lng: 108.2332176};
  var marker_sutsen = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Gang Rumah Afrudin'

  });
      var infowindow_sutsen = new google.maps.InfoWindow({
      content: '<h1>Rumah Afrudin</h1><p>Jl. Sutisna Senjaya, Cikalang, Kec. Tawang, Tasikmalaya, Jawa Barat 46114</p>'
    });
   marker_sutsen.addListener('click', function() {
      infowindow_sutsen.open(map, marker_sutsen);
    });

  }
