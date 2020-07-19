var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.0967619, lng: 5.9664093 },
    zoom: 6
  });
  var myLatLng = {lat: 50.9294336, lng: 11.587482};
  var marker_jena = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Universitas Jena'

  });
      var infowindow_jena = new google.maps.InfoWindow({
      content: '<h1>Universitas Jena</h1><p>Fürstengraben 1, 07743 Jena, Jerman</p><p><i>+49364194000<i></p>'
    });
   marker_jena.addListener('click', function() {
      infowindow_jena.open(map, marker_jena);
    });

  var stad = {lat:50.8759021, lng: 12.0795514};
  var marker_stad = new google.maps.Marker({
    position: stad,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Stadtverwaltung Gera'
    
  });
    var infowindow_stad = new google.maps.InfoWindow({
        content: '<h1>Stadtverwaltung Gera</h1><p>Kornmarkt 12, 07545 Gera, Jerman</p><p><i>+493658380<i></p>'
      });
     marker_stad.addListener('click', function() {
        infowindow_stad.open(map, marker_stad);
      });

  var lohse = {lat:51.7971929, lng: 7.8141562};
  var marker_lohse = new google.maps.Marker({
    position: lohse,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Kleintierpraxis Lohse/Feige'
    
  });
    var infowindow_lohse = new google.maps.InfoWindow({
        content: '<h1>Kleintierpraxis Lohse/Feige</h1><p>Ronneburger Str. 74, 07546 Gera, Jerman</p><p><i>+4936555176036<i></p>'
      });
     marker_lohse.addListener('click', function() {
        infowindow_lohse.open(map, marker_lohse);
      });

  var burger = {lat:-7.3270177, lng: 108.232465};
  var marker_burger = new google.maps.Marker({
    position: burger,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Bürgergalerie Neumünster e.V.'
    
  });
       var infowindow_burger = new google.maps.InfoWindow({
        content: '<h1>Bürgergalerie Neumünster e.V.</h1><p>Esplanade 20, 24534 Neumünster, Jerman</p>'
      });
     marker_burger.addListener('click', function() {
        infowindow_burger.open(map, marker_burger);
      });
   
  var Geraer = {lat:50.874083, lng: 12.0758121};
  var marker_geraer = new google.maps.Marker({
    position: Geraer,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Geraer Volkshochschule Aenne Biermann'
    
  });
       var infowindow_geraer = new google.maps.InfoWindow({
        content: '<h1>Geraer Volkshochschule Aenne Biermann</h1><p>Talstraße 3, 07545 Gera, Jerman</p><p><i>+4936555259301<i></p>'
      });
     marker_geraer.addListener('click', function() {
        infowindow_geraer.open(map, marker_geraer);
      });


  var thur = {lat:50.9230058, lng: 10.1443439};
  var marker_thur = new google.maps.Marker({
    position: thur,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Thuringian Parliament'
    
  });
       var infowindow_thur = new google.maps.InfoWindow({
        content: '<h1>Thuringian Parliament</h1><p>Jürgen-Fuchs-Straße 1, 99096 Erfurt, Jerman</p><p><i>+493613772200<i></p>'
      });
     marker_thur.addListener('click', function() {
        infowindow_thur.open(map, marker_thur);
      });

}