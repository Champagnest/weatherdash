
// "https://api.openweathermap.org/data/2.5/weather?q=Sacramento&appid=" + apikey);
var today = new Date();
today = today.toLocaleDateString("en-US");
var prevSearchObj = {};
var searchIndex = 0;
var today = new Date();

currentWeatherContainer = document.querySelector('h3')
currentWeatherContainer.innerText = today
// A $( document ).ready() block.
$( document ).ready(function() {
    var city =""
    var cityResults = []
    var fiveDayForecast = []
    $( "form" ).on("submit",async function( event ) {
         event.preventDefault();
         city = $("input#city").val()
         cityResults = await getCity(city)
         fiveDayForecast = await getforecast(city)
        console.log(fiveDayForecast)
        var cityToday = $(".today h2").text(cityResults.name)
        var tempToday = $(".today .temp").text(cityResults.main.temp + "°F")
        var windToday = $(".today .wind").text(cityResults.wind.speed + "MPH")
        var humidityToday = $(".today .humidity").text(cityResults.main.humidity)
        var img = $(".today-img")
        $(img).attr("src", `http://openweathermap.org/img/w/${cityResults.weather[0].icon}.png` )
        $(img).attr("alt", `${cityResults.weather[0].description}` )
        for (i=0; i<fiveDayForecast.list.length; i++){
          console.log(fiveDayForecast.list[i])
          $(`.day-${i}`).html(`
            <img src="http://openweathermap.org/img/w/${fiveDayForecast.list[i].weather[0].icon}.png" alt="${cityResults.weather[0].description}" />
            <p>Temp: ${fiveDayForecast.list[i].main.temp}°F</p>
            <p>Wind: ${fiveDayForecast.list[i].wind.speed}</p>
            <p>Humidity: ${fiveDayForecast.list[i].main.humidity}</p>
          `)
          // var tempToday = $(`.day-${i}`).append(`<img src="http://openweathermap.org/img/w/${fiveDayForecast.list[i].weather[0].icon}.png" alt="${cityResults.weather[0].description}" />`)
          // var tempToday = $(`.day-${i}`).html(`<p>Temp: ${fiveDayForecast.list[i].main.temp}°F</p>`)
          // var tempToday = $(`.day-${i}`).html(`<p>Temp: ${fiveDayForecast.list[i].main.temp}°F</p>`)
          // var tempToday = $(`.day-${i}`).html(`<p>Temp: ${fiveDayForecast.list[i].main.temp}°F</p>`)
        }
      });
    });


async function getCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=` + apikey.key)
   const json = await data.json()
   return(json);
};
async function getforecast(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&cnt=5&appid=` + apikey.key)
   const json = await data.json()
   return(json);
};



// var cityHistory = [city]
// localStorage.setItem("cityHistory", JSON.stringify(city))
// var cityHistory = JSON.parse(localStorage.getItem(cityHistory))