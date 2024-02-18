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

    switch (weather) {
        case 'Clear':
            icon = <ClearIcon size={size} aria-label='clear-icon'/>
            break
        case 'Clouds':
            icon = <CloudsIcon size={size} aria-label='clouds-icon'/>
            break
        case 'Drizzle':
            icon = <DrizzleIcon size={size} aria-label='drizzle-icon'/>
            break
        case 'Rain':
            icon = <RainIcon size={size} aria-label='rain-icon'/>
            break
        case 'Snow':
            icon = <SnowIcon size={size} aria-label='snow-icon'/>
            break
        case 'Thunderstorm':
            icon = <ThunderstormIcon size={size} aria-label='thunderstorm-icon'/>
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
            icon = <FogIcon size={size} aria-label='fog-icon'/>
            break
        default:
            icon = null
            break
    }

    return icon
}

export default WeatherIcon
