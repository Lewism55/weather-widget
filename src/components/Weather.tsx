import styled from 'styled-components'
import { useWeather } from '../context/WeatherContext'
import WeatherIcon from './WeatherIcon'
import FogIcon from '../assets/Fog'

const WeatherGrid = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;
    margin: 0px 0px 20px 0px;
`

const TopRow = styled.div`
    display: flex;
    flex: 3;
`

const BottomRow = styled.div`
    display: flex;
    flex: 1;
`

const DaylightCol = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`

const AllCol = styled.div`
    width: -webkit-fill-available;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Temperature = styled(AllCol)`
    font-size: 50px;
    font-weight: bold;
`

const OtherInfo = styled(AllCol)`
    font-size: 16px;
    color: grey;
`

const WindInfo = styled(OtherInfo)`
    flex-direction: row;
`

const Weather = () => {
    const { weatherData } = useWeather()

    return (
        <WeatherGrid>
            <TopRow>
                <Temperature>{weatherData.main.temp}°c</Temperature>
                <OtherInfo>
                    <WeatherIcon weather={weatherData.weather[0].main} size='large' />
                </OtherInfo>
            </TopRow>
            <BottomRow>
                <OtherInfo>
                    <DaylightCol>Sunrise: {weatherData.sys.sunrise}</DaylightCol>
                    <DaylightCol>Sunset: {weatherData.sys.sunset}</DaylightCol>
                </OtherInfo>
                <WindInfo>
                    <FogIcon size='small' />
                    {weatherData.wind.speed} m/s
                </WindInfo>
            </BottomRow>
        </WeatherGrid>
    )
}

export default Weather
