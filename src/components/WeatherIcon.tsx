import ClearIcon from '../assets/Clear';
import CloudsIcon from '../assets/Clouds';
import DrizzleIcon from '../assets/Drizzle';
import FogIcon from '../assets/Fog';
import RainIcon from '../assets/Rain';
import SnowIcon from '../assets/Snow';
import ThunderstormIcon from '../assets/Thunderstorm';
import { useWeather } from '../context/AltContext';

interface WeatherIconProps {
    width: number;
    height: number;
}

const WeatherIcon = ({ width, height }: WeatherIconProps) => {
    const { weatherData } = useWeather()

    let icon

    switch (weatherData.weather[0].main) {
        case 'Clear':
            icon = <ClearIcon width={width} height={height} />;
            break;
        case 'Clouds':
            icon = <CloudsIcon width={width} height={height}/>;
            break;
        case 'Drizzle':
            icon = <DrizzleIcon width={width} height={height} />;
            break;
        case 'Fog':
            icon = <FogIcon width={width} height={height} />;
            break;
        case 'Rain':
            icon = <RainIcon width={width} height={height} />;
            break;
        case 'Snow':
            icon = <SnowIcon width={width} height={height} />;
            break;
        case 'Thunderstorm':
            icon = <ThunderstormIcon width={width} height={height} />;
            break;
        default:
            icon = null;
            break;
    }

    return <>{icon}</>;
};

export default WeatherIcon;