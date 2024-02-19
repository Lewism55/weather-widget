import { OptionType } from "../components/DropdownSelect"

// API returns datetime as a unix timestamp, this function converts it to a readable time
export const convertDateTime = (dt: number) => {
    return new Date(dt * 1000).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
}

export interface ApiForecastData {
    list: {
        dt: number
        main: {
            temp: number
        }
        rain: number
        weather: {
            main: string
        }
        time: string
    }[]
}

export const groupForecastByDate = (forecast: ApiForecastData) => {
    // Little bit of type gymnastics to make TS happy with the reducer accumalator... Don't want to use any, but it's the easiest way to do this.
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

// This is to fit the React-Select types. Each option is of the format: { value: string, label: string }
export const formatOptions = (options: string[]): OptionType[] => {
    return options.map((option) => ({ value: option, label: option }))
}
