var currentWeather = {
    temp: 20,
    humidity: 45,
    type: "Sunny",
    wind: 5,
};

function updateWeather() {
    $.ajax({
        type: 'Get',
        url: 'https://api.openweathermap.org/data/2.5/weather?q=Hamilton,CA&appid=671b93de8978f03f3102c346cf9e2d6a',
        success: function (data) {
            currentWeather.temp = data.main.temp - 273.15;
            currentWeather.humidity = data.main.humidity;
            currentWeather.type = data.weather[0].main;
            currentWeather.wind = data.wind.speed;
        },
        error: function (error) {
            console.error(error);
        }
    });
    return;
}
window.onload = updateWeather;

function getWeatherEffects() {
    return [0, 0];
}
