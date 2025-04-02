let inputbox = document.querySelector('.input-box')
let searchBtn = document.getElementById('searchBtn')
let weather_img = document.querySelector('.weather-img')
let temperature = document.querySelector('.temperature')
let description = document.querySelector('.description')
let humidity = document.getElementById('humidity')
let wind_speed = document.getElementById('wind')
let location_not_found = document.querySelector('.location-not-found')
let weather_body = document.querySelector('.weather-body')

async function checkWeather(city) {

    
    const api_key = 'f855b3512173f83556000ae131ca6f57';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

    // const weather_data = await fetch(`${url}`).then(response => response.json())

    const weather_data = await (await fetch(url)).json()
    // console.log(weather_data)

    if (weather_data.title == 'No Definitions Found') {
        location_not_found.style.display = 'flex';
        weather_body.style.display = 'none'
        return;
    }
    location_not_found.style.display = 'none';
    weather_body.style.display = 'flex'


    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`
    description.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`


    switch (weather_data.weather[0].main) {

        case 'Clouds':
            weather_img.src = '../ASSEST/cloud.png'
            break;

        case 'Clear':
            weather_img.src = '../ASSEST/clear.png'
            break;

        case 'Rain':
            weather_img.src = '../ASSEST/rain.png'
            break;

        case 'Mist':
            weather_img.src = '../ASSEST/mist.png'
            break;

        case 'Snow':
            weather_img.src = '../ASSEST/snow.png'
            break;

    }


}

searchBtn.addEventListener('click', () => {
    checkWeather(inputbox.value);
})

