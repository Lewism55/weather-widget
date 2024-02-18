import { ForecastData } from '../context/WeatherContext'

export const convertDateTime = (dt: number) => {
    return new Date(dt * 1000).toLocaleTimeString('uk', { hour: '2-digit', minute: '2-digit' })
}

export const groupForecastByDate = (forecast: ForecastData) => {
    // Little bit of type gymnastics to make TS happy with the reducer accumalator...
    return forecast.list.reduce((acc: { [key: string]: any[] }, forecastItem) => {
        // conversion of unix timestamp to date string
        const fullDate = new Date(forecastItem.dt * 1000)
        const date = fullDate.toLocaleDateString('en-GB')
        const time = fullDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

        if (!acc[date]) {
            acc[date] = []
        }

        // sneak in the time here so it's easier to access in the forecastTime component
        acc[date].push({ ...forecastItem, time: time })

        return acc
    }, {})
}

export const formatOptions = (options: string[]): { value: string; label: string }[] => {
    return options.map((option) => ({ value: option, label: option }))
}
