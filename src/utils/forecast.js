const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=fc62e6603178ed85c40da438a3db8ca7&query=' + latitude + ',' + longitude

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback(body.error.info, undefined)
        } else {
            const detail = {
                localTime: body.location.localtime,
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