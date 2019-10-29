const city = document.querySelector('#input');
$.getScript('config.js');


$('.btn').click(function(){
  console.log(city.value)
$.getJSON({
  method: "GET",
  url: `http://api.openweathermap.org/data/2.5/weather?q=${city.value},us&units=imperial&APPID=${apikey}`,
  dataType: 'JSON'
})
.done(updateDOM)
.fail(function(){
  alert('Please Enter a valid city name!')
})
})

 function updateDOM(data){
   console.log(data)
   $("#humid").text(`${data.main.humidity}% humidity`)
   $("#text").text(`${data.main.temp} F`)
   if(data.main.temp < 50){
    $(".icon").html('<i class="fas fa-thermometer-empty fa-2x" style="color:#fff;"></i>')
   }else {
     $(".icon").html('<i class="fas fa-sun fa-2x" style="color:#fff;"></i>')
   }
 }