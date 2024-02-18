import styled from 'styled-components'
import { useWeather } from '../context/AltContext'
import WeatherIcon from './WeatherIcon'
import FogIcon from '../assets/Fog'

const WeatherGrid = styled.div`
    display: flex;
    flex-direction: column;
    height: 50%;
    width: 100%;
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
    font-size: 40px;
    font-weight: bold;
`

const OtherInfo = styled(AllCol)`
    font-size: 14px;
    font-style: italic;
    color: grey;
`

const WindInfo = styled(OtherInfo)`
    flex-direction: row;
`

const Weather = () => {
    // used props here to get around the awkward optional chaining that's caused from having the weather context initially return unknown
    const { weatherData } = useWeather()

    return (
        <WeatherGrid>
            <TopRow>
                <Temperature>{weatherData.main.temp}°C</Temperature>
                <OtherInfo>
                    {weatherData.weather[0].main}
                    <WeatherIcon width={64} height={64} />
                </OtherInfo>
            </TopRow>
            <BottomRow>
                <OtherInfo>
                    <DaylightCol>Sunrise: {weatherData.sys.sunrise}</DaylightCol>
                    <DaylightCol>Sunset: {weatherData.sys.sunset}</DaylightCol>
                </OtherInfo>
                <WindInfo>
                    <FogIcon width={64} height={64} />
                    {weatherData.wind.speed} m/s
                </WindInfo>
            </BottomRow>
        </WeatherGrid>
    )
}

export default Weather
