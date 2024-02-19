import styled from 'styled-components'
import { defaultWeatherData, useWeather } from '../context/WeatherContext'
import { motion } from 'framer-motion'
import DropdownSelect from './DropdownSelect'
import Loading from '../assets/Loading'
import Weather from './Weather'
import Forecast from './Forecast'
import { cities } from '../utils/constants'

const StyledWidget = styled.div`
    width: 320px;
    height: 430px;
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    font-family: 'calibri', sans-serif;
    background-color: #f7fcfe;
`

const MainWrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
`

function Widget() {
    const { weatherData, forecastData, isLoading, setLocation } = useWeather()

    // Loading state, also show loading if the default weather data is being used
    // the json stringify is to ensure a cleaner check... aware of issues with strict equality and objects
    // https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
    // stringifying objects allows a better comparison as JS doesn't have issues with string comparison.
    if (isLoading || JSON.stringify(weatherData) === JSON.stringify(defaultWeatherData))
        return (
            <StyledWidget>
                <Loading />
            </StyledWidget>
        )

    // Error/no data state (likely caused by API downtime/issue)
    if (!weatherData || !forecastData) return <StyledWidget>'No data available currently. Please try again later.'</StyledWidget>

    return (
        <StyledWidget>
            {' '}
            <MainWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                <DropdownSelect onChange={setLocation} options={cities} selectedOption={weatherData.name} size='large' />
                <Weather />
                <Forecast />
            </MainWrapper>
        </StyledWidget>
    )
}

export default Widget
