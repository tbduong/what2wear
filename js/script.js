$(document).ready(function(){


$(document).ready(function() {

//placeholder for longitude, latitude coordinates
  var Geo={};

//Check for geolocation support --  create success and error functions to handle
  if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success, error);
      //if supported, we will run one of two callbacks -- support
  } else {
      console.log("Geolocation is not supported on this browser.");
  }

//success function
  function success(position){
    console.log(position);
    console.log(Geo);
      Geo.lat = position.coords.latitude;
      console.log(Geo.lat);
      Geo.long = position.coords.longitude;
      console.log(Geo.long);
      var coordinates = Geo.lat + "," + Geo.long;
      $('#coordinates').html(coordinates);



  }

  //error function
    function error(msg){
        console.log(msg);
    }

});









});
