const city = document.querySelector('.info');
const url = 'https://api.darksky.net/forecast/67c6dfe074cd7f04287259be7fb53417/'
$('#btn').click(function(){
    navigator.geolocation.getCurrentPosition(success,error)

    function success(pos) {
      var lat = pos.coords.latitude;
      var long = pos.coords.longitude;
      weather(lat, long);
  }

  function error() {
    console.log('There was an error');
}

    function weather(lat,long){
      var url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`; 
      $.getJSON(url, function(data){
        updateDOM(data)
      })    
      }   
    
    function updateDOM(data){
      const city = data.name;
      const temp = Math.round(data.main.temp)
      const icon = data.weather[0].icon
      
      $('#text').html(city)
      $('#city').html(temp + 'C')
      $('#icon').attr('src', icon)
  };
})