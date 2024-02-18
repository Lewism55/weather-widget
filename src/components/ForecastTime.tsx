import styled from 'styled-components'
import WeatherIcon from './WeatherIcon'

interface ForecastTimeProps {
    forecastType: string
    weather: string
    temp: number
    startTime: string
}

const ForecastTimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 4px;
    margin: 5px 1px 1px 1px;
    border: 1px solid #dcdddd;
    border-radius: 10px;
    width: 26px;
    height: 60px;
    justify-content: space-around;
    background-color: #f8fbf8;
`

const TemperatureValue = styled.h4`
    margin: 5px;
    font-size: 12px;
`

const StartTime = styled.div`
    font-style: italic;
    font-size: 12px;
    color: lightgrey;
`

const ForecastTime = ({ forecastType, weather, temp, startTime }: ForecastTimeProps) => {
    return (
        <ForecastTimeContainer aria-label='forecast-blob'>
            {forecastType === 'weather' ? <WeatherIcon weather={weather} size='small' /> : <TemperatureValue>{temp}°c</TemperatureValue>}
            <StartTime>{startTime}</StartTime>
        </ForecastTimeContainer>
    )
}

export default ForecastTime
