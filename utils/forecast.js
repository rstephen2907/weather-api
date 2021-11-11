const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=03b5af052701b7fcf27862f4969538ab&query=' + latitude + ',' + longitude;

    request({ url, json: true }, (error, response, body) => {
        if (error) {
            callback('Unable to connect weather service!!');
        } else if (body.error) {
            callback('Unable to find location. Try another one');
        } else {
            callback(undefined, {
                weatherDescription: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelsLike: body.current.feelslike
            });
        }
    });
}

module.exports = forecast;