import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = ({ capital }) => {

    const [weather, setWeather] = useState({})

    useEffect(() => {
        axios
            .get('http://api.weatherstack.com/current?access_key=' + process.env.REACT_APP_API_KEY + '&query=' + capital)
            .then(response => {
                setWeather(response.data.current)
            })
    }, [])

    return (
        <div>
            <h4>Weather in {capital}</h4>
            <div><b>temperature: </b>{weather.temperature} Celsius</div>
            <div><b>wind: </b>{weather.wind_speed} mph digection {weather.wind_dir}</div>
        </div>
    )
}

export default Weather