import styled from 'styled-components'
import { defaultWeatherData, useWeather } from '../context/AltContext'
import { motion } from 'framer-motion'
import LocationSelector from './LocationSelector'
import Loading from '../assets/Loading'
import Weather from './Weather'

const StyledWidget = styled.div`
    width: 300px;
    height: 450px;
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
    background-image: linear-gradient(#F8FBF8, #F7FCFE);
`

const MainWrapper = styled(motion.div)`
    height: 100%;
    width: 100%;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 40px;
`

function Widget() {
    const { weatherData, forecastData, isLoading, location, setLocation, refresh,  } = useWeather()
    
    // created var to prevent repeating of styled widget tag. Also one liners make it easier to read.
    let content

    // stuck with if/else because of the data checks being multiple possible values. 
    // switch statements work best for single value checks imo.
    if (isLoading || weatherData === defaultWeatherData ) content = <Loading />
    else if (!weatherData || !forecastData) content = 'No data available'
    else {
        content = (
            <>
                <LocationSelector onChange={setLocation} selectedCity={weatherData.name} />
                <MainWrapper initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                    <Title>{weatherData.name}</Title>
                    <Weather />
                </MainWrapper>
            </>
        )
    }

    return (
        <StyledWidget>
            {content}
        </StyledWidget>
    )
}

export default Widget
