import styled from 'styled-components'
import { useWeather } from '../context/WeatherContext'
import { motion } from 'framer-motion'
import LocationSelector from './LocationSelector'
import Loading from '../assets/Loading'

const StyledWidget = styled.div`
    width: 300px;
    height: 450px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`

function Widget() {
    const { weather, forecast, setLocation } = useWeather()

    if (weather.isLoading || forecast.isLoading)
        return (
            <StyledWidget>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    <Loading />
                </motion.div>
            </StyledWidget>
        )

    if (weather.error || forecast.error)
        return (
            <StyledWidget>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    An error has occurred
                </motion.div>
            </StyledWidget>
        )

    if (!weather.data || !forecast.data)
        return (
            <StyledWidget>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                    No data available
                </motion.div>
            </StyledWidget>
        )

    return (
        <StyledWidget>
            <LocationSelector onChange={setLocation} selectedCity={weather.data.name} />
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
                <h1>{weather.data.name}</h1>
                <h4>{weather.data.weather[0].main}</h4>
                <p>Temperature: {weather.data.main.temp}°C</p>
                <p>Sunrise: {new Date(weather.data.sys.sunrise * 1000).toLocaleTimeString('uk', { hour: '2-digit', minute: '2-digit' })}</p>
                <p>Sunset: {new Date(weather.data.sys.sunset * 1000).toLocaleTimeString('uk', { hour: '2-digit', minute: '2-digit' })}</p>
                <p>Wind speed: {weather.data.wind.speed} m/s</p>
                <p></p>
            </motion.div>
        </StyledWidget>
    )
}

export default Widget
