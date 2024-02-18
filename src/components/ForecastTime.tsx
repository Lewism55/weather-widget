import styled from 'styled-components';
import WeatherIcon from './WeatherIcon';

interface ForecastTimeProps {
    forecastType: 'weather' | 'temperature';
    forecast: string;
    temp: number;
    startTime: string;
}

const ForecastTimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TemperatureValue = styled.h2`
   font-size: 30px;
`;

const StartTime = styled.div`
    font-style: italic;
    font-size: 12px;
    color: lightgrey;
`;

const ForecastTime = ({ forecastType, forecast, temp, startTime }: ForecastTimeProps) => {
    return (
        <ForecastTimeContainer>
            {forecastType === 'weather' ? (
                <WeatherIcon width={64} height={64}/>
            ) : (
                <TemperatureValue>25°C</TemperatureValue>
            )}
            <StartTime>{startTime}</StartTime>
        </ForecastTimeContainer>
    );
};


export default ForecastTime;