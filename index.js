const apikey =  '9c0dbf0ead41816ebcae0646235f2f79';
const city = document.querySelector('#input')


$('#btn').click(function(){
  console.log(city.value)
$.getJSON({
  method: "GET",
  url: `http://api.openweathermap.org/data/2.5/weather?q=${city.value},us&units=imperial&APPID=${apikey}`,
  dataType: 'JSON'
})
.done(updateDOM)
.fail(function(){
  alert('UH OH')
})
})

 function updateDOM(data){
   console.log(data)
   $("#text").text(`${data.main.temp} F`)
   if(data.main.temp < 50){
    $(".icon").html('<i class="fas fa-thermometer-empty fa-2x"></i>')
   }else {
     $(".icon").html('<i class="fas fa-sun fa-2x"></i>')
   }
 }