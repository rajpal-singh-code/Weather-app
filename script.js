const apiKey = "80046ee3e420cc0e10229086411b5910";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "photo/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "photo/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "photo/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "photo/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "photo/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    
    }

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});