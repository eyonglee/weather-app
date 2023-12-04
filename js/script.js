let weather = {
    "apikey":"9ae2954f3e535a26ea5aaf7c6e361ca6",
    fetchWeather: function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apikey
        )
        .then((response)=> response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, temp_min, temp_max, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".min").innerText = "Low: " + temp_min + "°F     "
        document.querySelector(".max").innerText = "High: " + temp_max + "°F"
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "mph";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/" + window.screen.width + "x" + window.screen.height + "/?" + name + "')";
        document.querySelector(".weather").classList.remove("loading");
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Ann Arbor")

console.log(window.screen.height)