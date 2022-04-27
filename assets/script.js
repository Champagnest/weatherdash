// "https://api.openweathermap.org/data/2.5/weather?q=Sacramento&appid=" + apikey);

fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=" + apikey.key)
.then(function(response) {

   return response.json()
})
.then(function(data) {
    console.log(data);
});