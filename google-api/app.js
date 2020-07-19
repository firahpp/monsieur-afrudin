var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -7.3266396, lng: 108.2258899 },
    zoom: 13
  });
  var myLatLng = {lat:-7.3000398, lng: 108.2025775};
  var marker_saungranggon = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Saung Ranggon'

  });
      var infowindow_saungranggon = new google.maps.InfoWindow({
      content: '<h1>Saung Ranggon</h1><p>Jl. Leuwi Dahu No.81, Indihiang, Kec. Indihiang, Tasikmalaya, Jawa Barat 46151</p><p><i>+6281320574300<i></p>'
    });
   marker_saungranggon.addListener('click', function() {
      infowindow_saungranggon.open(map, marker_saungranggon);
    });

  var rmsutsen = {lat:-7.325795, lng: 108.2182767};
  var marker_rmsutsen = new google.maps.Marker({
    position: rmsutsen,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Rumah Makan Sutsen'
    
  });
    var infowindow_rmsutsen = new google.maps.InfoWindow({
        content: '<h1>Rumah Makan Sutsen</h1><p>Jl. Sutisna Senjaya No.163, Cikalang, Kec. Tawang, Tasikmalaya, Jawa Barat 46111</p><p><i>+622652354990<i></p>'
      });
     marker_rmsutsen.addListener('click', function() {
        infowindow_rmsutsen.open(map, marker_rmsutsen);
      });

  var ninianteh = {lat:-7.3239909, lng: 108.2209364};
  var marker_ninianteh = new google.maps.Marker({
    position: ninianteh,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Rumah Makan Nini Anteh'
    
  });
    var infowindow_ninianteh = new google.maps.InfoWindow({
        content: '<h1>Rumah Makan Nini Anteh</h1><p>Jl. Dewi Sartika No.14, Empangsari, Kec. Tawang, Tasikmalaya, Jawa Barat 46113</p><p><i>+62265314410<i></p>'
      });
     marker_ninianteh.addListener('click', function() {
        infowindow_ninianteh.open(map, marker_ninianteh);
      });

  var brotfabrik = {lat:-7.3270177, lng: 108.232465};
  var marker_brotfabrik = new google.maps.Marker({
    position: brotfabrik,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Berliner Brotfabrik Konditorei & Cafe'
    
  });
       var infowindow_brotfabrik = new google.maps.InfoWindow({
        content: '<h1>Berliner Brotfabrik Konditorei & Cafe</h1><p>Jalan Gunung Sari No 25 Sukasari, Lengkongsari, Kec. Tawang, Tasikmalaya, Jawa Barat 461113</p><p><i>+6281322088480<i></p>'
      });
     marker_brotfabrik.addListener('click', function() {
        infowindow_brotfabrik.open(map, marker_brotfabrik);
      });
   
  var asepstroberi = {lat:-7.3256324, lng: 108.2173323};
  var marker_asepstroberi = new google.maps.Marker({
    position: asepstroberi,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Liwet Aseo Stroberi'
    
  });
       var infowindow_asepstroberi = new google.maps.InfoWindow({
        content: '<h1>Liwet Asep Stroberi</h1><p>Jl. R. Ikik Wiradikarta No.9, Yudanagara, Kec. Cihideung, Tasikmalaya, Jawa Barat 46112</p><p><i>+6281220317111<i></p>'
      });
     marker_asepstroberi.addListener('click', function() {
        infowindow_asepstroberi.open(map, marker_asepstroberi);
      });

  var saungjati = {lat:-7.3459886, lng: 108.2353685};
  var marker_saungjati = new google.maps.Marker({
    position: saungjati,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Rumah Makan Saung Gunung Jati'
    
  });
       var infowindow_saungjati = new google.maps.InfoWindow({
        content: '<h1>Rumah Makan Saung Gunung Jati</h1><p>Jl. Letjen Mashudi No.45, Setiaratu, Kec. Cibeureum, Tasikmalaya, Jawa Barat 46123</p><p><i>+6285223658625<i></p>'
      });
     marker_saungjati.addListener('click', function() {
        infowindow_saungjati.open(map, marker_saungjati);
      });

  var sotononoy = {lat:-7.3345004, lng: 108.2347774};
  var marker_sotononoy = new google.maps.Marker({
    position: sotononoy,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Soto Ayam Kampung Nonoy'
    
  });
       var infowindow_sotononoy = new google.maps.InfoWindow({
        content: '<h1>Soto Ayam Kampung Nonoy</h1><p>Samping Al - Mutaqin, Jl. Sutisna Senjaya No.240, Cikalang, Kec. Tawang, Tasikmalaya, Jawa Barat 46114</p><p><i>+6287745573197<i></p>'
      });
     marker_sotononoy.addListener('click', function() {
        infowindow_sotononoy.open(map, marker_sotononoy);
      });

  var hegarsari = {lat:-7.3442951, lng: 108.2210337};
  var marker_hegarsari = new google.maps.Marker({
    position: hegarsari,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Saung Hegarsari'
    
  });
       var infowindow_hegarsari = new google.maps.InfoWindow({
        content: '<h1>Saung Hegarsari</h1><p>Jl. Bkr No.68, Kahuripan, Kec. Tawang, Tasikmalaya, Jawa Barat 46114</p><p><i>+62265329099<i></p>'
      });
     marker_hegarsari.addListener('click', function() {
        infowindow_hegarsari.open(map, marker_hegarsari);
      });

  var enakdiuk = {lat:-7.3070463, lng: 108.1861492};
  var marker_enakdiuk = new google.maps.Marker({
    position: enakdiuk,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Rumah Makan Genah Calik'
    
  });
       var infowindow_enakdiuk = new google.maps.InfoWindow({
        content: '<h1>Rumah Makan Genah Calik</h1><p>Jl. Ir. H. Juanda No.14, Panyingkiran, Kec. Indihiang, Tasikmalaya, Jawa Barat 46211</p><p><i>+62852205962679<i></p>'
      });
     marker_enakdiuk.addListener('click', function() {
        infowindow_enakdiuk.open(map, marker_enakdiuk);
      });

  var wongsolo = {lat:-7.3440752, lng: 108.2057127};
  var marker_wongsolo = new google.maps.Marker({
    position: wongsolo,
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'RM Wong Solo Tasikmalaya'
    
  });
       var infowindow_wongsolo = new google.maps.InfoWindow({
        content: '<h1>RM Wong Solo Tasikmalaya</h1><p>Jl. Mesjid Agung No.12, Tawangsari, Kec. Tawang, Tasikmalaya, Jawa Barat 46121</p><p><i>+62265335455<i></p>'
      });
     marker_wongsolo.addListener('click', function() {
        infowindow_wongsolo.open(map, marker_wongsolo);
      });

}