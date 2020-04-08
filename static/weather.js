var currentWeather = {
    temp: 20,
    humidity: 45,
    type: "Sunny",
    wind: 5,
};
var timeSinceLastBigWeather = 0;

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
    totalWeather = (currentWeather.humidity/4) + currentWeather.wind - currentWeather.temp;
    if (currentWeather.type === 'Thunderstorm') {
        totalWeather + 100;
    } else if (currentWeather.type === 'Drizzle') {
        totalWeather + 10; 
    } else if (currentWeather.type === 'Rain') {
        totalWeather + 30;
    } else if (currentWeather.type === 'Snow') {
        totalWeather + 20;
    } else if (currentWeather.type === 'Clear') {
        totalWeather - 10;
    }

    totalWeather = Math.round(totalWeather);
    if (totalWeather > 30) {
        timeSinceLastBigWeather = 0;
        console.log('Big weather event');
    }

    if (timeSinceLastBigWeather > 11) {
        totalWeather = Math.round((Math.random() * 100) / 2);
        console.log('Random weather event');
    }

    totalWeather = Math.round(totalWeather * (1 - (fire.protection/10000)))
    console.log('Total weather: ' + totalWeather.toString());
    timeSinceLastBigWeather++;
    return totalWeather;
}
