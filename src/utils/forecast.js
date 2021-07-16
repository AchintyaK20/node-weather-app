const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=bbbf05e7daf73c807624367cb302a08f&query=' + latitude + ',' + longitude

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            const detail = {
                description: body.current.weather_descriptions[0],
                currentTemp: body.current.temperature,
                feelsLike: body.current.feelslike,
                humidity: body.current.humidity,
                precipitation: body.current.precip,
                observationTime: body.current.observation_time
            }
            callback(undefined, detail)
        } 
    })
}

module.exports = forecast