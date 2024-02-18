import ClearIcon from '../assets/Clear'
import CloudsIcon from '../assets/Clouds'
import DrizzleIcon from '../assets/Drizzle'
import FogIcon from '../assets/Fog'
import RainIcon from '../assets/Rain'
import SnowIcon from '../assets/Snow'
import ThunderstormIcon from '../assets/Thunderstorm'

interface WeatherIconProps {
    weather: string
    size: 'large' | 'small'
}

const WeatherIcon = ({ weather, size }: WeatherIconProps) => {
    let icon
    console.log(weather)

    switch (weather) {
        case 'Clear':
            icon = <ClearIcon size={size} />
            break
        case 'Clouds':
            icon = <CloudsIcon size={size} />
            break
        case 'Drizzle':
            icon = <DrizzleIcon size={size} />
            break
        case 'Rain':
            icon = <RainIcon size={size} />
            break
        case 'Snow':
            icon = <SnowIcon size={size} />
            break
        case 'Thunderstorm':
            icon = <ThunderstormIcon size={size} />
            break
        case 'Fog':
        case 'Mist':
        case 'Haze':
        case 'Smoke':
        case 'Dust':
        case 'Sand':
        case 'Ash':
        case 'Squall':
        case 'Tornado':
            icon = <FogIcon size={size} />
            break
        default:
            icon = null
            break
    }

    return <>{icon}</>
}

export default WeatherIcon
