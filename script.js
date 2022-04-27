// "https://api.openweathermap.org/data/2.5/weather?q=Sacramento&appid=" + apikey);

// A $( document ).ready() block.
$( document ).ready(function() {
    var city =""
    $( "form" ).on("submit",function( event ) {
         event.preventDefault();
         city = $("input#city").val()
        console.log(city)
      });
      
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=` + apikey.key)
.then(function(response) {

   return response.json()
})
.then(function(data) {
    console.log(data);
});
});

