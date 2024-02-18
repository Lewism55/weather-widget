import styled from 'styled-components'
import ForecastTime from './ForecastTime'

interface oneDayForecast {
    dt: number
    main: {
        temp: number
    }
    rain: number
    weather: {
        main: string
    }
    time: string
}

interface ForecastDayProps {
    oneDayForecast: oneDayForecast[]
    forecastType: string
}

const ForecastDayContainer = styled.div`
    display: flex;
    overflow-x: auto;
    scrollbar-width: thin;
    scrollbar-color: grey;
    justify-content: space-between;
    align-items: center;
    padding-top: 0px;
    height: 100px;
    width: fit-content;
`

const ForecastDay = ({ oneDayForecast, forecastType }: ForecastDayProps) => {
    console.log(oneDayForecast)
    return (
        <ForecastDayContainer>
            {oneDayForecast.map((day, index) => (
                <ForecastTime key={index} forecastType={forecastType} weather={day.weather.main} temp={day.main.temp} startTime={day.time} />
            ))}
        </ForecastDayContainer>
    )
}

export default ForecastDay
