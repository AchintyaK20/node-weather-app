const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const locationInfo = document.querySelector('#location')
const description = document.querySelector('#description')
const currentTemp = document.querySelector('#currentTemp')
const feelsLike = document.querySelector('#feelsLike')
const humidity = document.querySelector('#humidity')
const precipitation = document.querySelector('#precipitation')
const observationTime = document.querySelector('#observationTime')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const address = search.value

    locationInfo.textContent = 'Loading...'
    description.textContent = ''
    currentTemp.textContent = ''
    feelsLike.textContent = ''
    humidity.textContent = ''
    precipitation.textContent = ''
    observationTime.textContent = ''

    fetch('/weather?address=' + address).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                locationInfo.textContent = data.error
            } else {
                locationInfo.textContent = 'Location : ' + data.location
                description.textContent = 'Description : ' + data.forecast.description
                currentTemp.textContent = 'Temperature : ' + data.forecast.currentTemp + '°C'
                feelsLike.textContent = 'Feels Like : ' + data.forecast.feelsLike + '°C'
                humidity.textContent = 'Humidity : ' + data.forecast.humidity + '%'
                precipitation.textContent = 'Precipitation : ' + data.forecast.precipitation + ' mm'
                observationTime.textContent = 'Observation Time : ' + data.forecast.observationTime
            }
        })
    })
})