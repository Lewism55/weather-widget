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
    height: 380px;
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

    // created var to prevent repeating of styled widget tag. Also one liners make it easier to read.
    let content

    // stuck with if/else because of the data checks being multiple possible values.
    // switch statements work best for single value checks imo.
    if (isLoading || weatherData === defaultWeatherData) content = <Loading />
    else if (!weatherData || !forecastData) content = 'No data available currently. Please try again later.'
    else {
        content = (
            <>
                <DropdownSelect onChange={setLocation} options={cities} selectedOption={weatherData.name} size='large'/>
                <MainWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                    <Weather />
                    <Forecast />
                </MainWrapper>
            </>
        )
    }

    return <StyledWidget>{content}</StyledWidget>
}

export default Widget
