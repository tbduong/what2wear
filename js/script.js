$(document).ready(function() {

//placeholder variable for coordinates
  var Geo={};

//Check for geolocation support --  create success and error functions to handle
  if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(success, error);
      //if supported, we will run one of two callbacks -- support
  } else {
      console.log("Geolocation is not supported on this browser.");
  }

//success function
  function success(position) {
      Geo.lat = position.coords.latitude;
      Geo.long = position.coords.longitude;

      var lat = Geo.lat,
      long = Geo.long,
      coordinates = lat + ", " + long;
      console.log(lat + ", " + long);

      var api = "https://api.openweathermap.org/data/2.5/weather?lat="+
      lat + "&" + "lon=" + long + "&APPID=14fb5987c09b2057723e8b79a60db89b";

      $.ajax({
        url: api,
        type: "GET",
        dataType: "json",
        success: function(data) {
          console.log(data);

          var kelvToF = (9/5) - 459.67,
          location = data.name,
          temp = Math.floor((data.main.temp - 273.25) * 1.8 + 32),
          lo = Math.floor((data.main.temp_min - 273.25) * 1.8 + 32),
          hi = Math.floor((data.main.temp_max - 273.25) * 1.8 + 32);

        console.log(temp + "," + lo + "," + hi);

        // var tempArray = [temp, lo, hi],
        // arr = [];
        // tempArray.forEach(function(t){
        //   far= Math.floor(t);
        //   arr.push(far);
        //   console.log(arr);
        // });
        $('#location').html(location);
        $('#temperature').html(temp);
        $('#lo').html(lo);
        $('#hi').html(hi);







        },
        error: function(msg) {
          console.log("Sorry! Unable to fetch data.");
        }
      });

      $('.reload').on('click', success);
      success();







  }
  //error function
  function error(){
      console.log("Sorry, unable to fetch data.");
  }

});
