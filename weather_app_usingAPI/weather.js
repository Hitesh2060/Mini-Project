const search_btn = document.querySelector(".btn");

const input_box = document.querySelector(".input_box");

const weather_img = document.querySelector(".weather_img");

const temperature = document.querySelector(".temperature");

const description = document.querySelector(".description");

const humidity = document.querySelector("#humidity");

const wind = document.querySelector("#wind_speed");

const location_notfound = document.querySelector(".location_notfound");

const weather_body = document.querySelector(".weather_body");


async function checkweather(city) {
    const api_key = "01f67e2ed73740717c23d7ef24dd0ed3";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

    console.log(weather_data);

    location_notfound.style.display = "none";
    if (weather_data.cod == "404") {
        location_notfound.style.display = "flex";
        weather_body.style.display = "none";
        return;
    }
    weather_body.style.display = "flex";


    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;

    wind.innerHTML = `${weather_data.wind.speed}Km/h`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "/assets/cloud.png"
            break;
        case 'Clear':
            weather_img.src = "/assets/clear.png"
            break;
        case 'Rain':
            weather_img.src = "/assets/rain.png"
            break;
        case 'Mist':
            weather_img.src = "/assets/mist.png"
            break;
        case 'Snow':
            weather_img.src = "/assets/snow.png"
            break;
    }

}

search_btn.addEventListener("click", () => {
    checkweather(input_box.value);
})
