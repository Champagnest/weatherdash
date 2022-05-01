// "https://api.openweathermap.org/data/2.5/weather?q=Sacramento&appid=" + apikey);

// A $( document ).ready() block.
$( document ).ready(function() {
    var city =""
    var cityResults = []
    $( "form" ).on("submit",async function( event ) {
         event.preventDefault();
         city = $("input#city").val()
         cityResults = await getCity(city)
        console.log(cityResults)
        var cityToday = $(".today h2").text(cityResults.name)
        var tempToday = $(".today .temp").text(cityResults.main.temp + "°F")
        var windToday = $(".today .wind").text(cityResults.wind.speed + "MPH")
        var humidityToday = $(".today .humidity").text(cityResults.main.humidity)
        var descriptionToday = $(".today .description").append(`<img src="http://openweathermap.org/img/w/${cityResults.weather[0].icon}.png" alt="${cityResults.weather[0].description}" />`)
      });
    });


async function getCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=` + apikey.key)
   const json = await data.json()
   return(json);
};
async function getforecast(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=` + apikey.key)
   const json = await data.json()
   return(json);
};
