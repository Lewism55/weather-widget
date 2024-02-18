import { createContext, useContext, ReactNode, useState } from 'react'
import { useQuery, UseQueryResult } from 'react-query'

// define the shape of the data returned from the API for current weather
export interface WeatherData {
    name: string
    weather: { main: string }[]
    sys: { sunrise: number; sunset: number }
    main: { temp: number }
    rain?: number
    wind: { speed: number }
}

const defaultWeatherData: WeatherData = {
    name: '',
    weather: [{ main: '' }],
    sys: { sunrise: 0, sunset: 0 },
    rain: 0,
    main: { temp: 0 },
    wind: { speed: 0 },
}

// define the shape of the data returned from the API for the forecast
interface ForecastData {
    list: {
        dt: number
        main: {
            temp: number
        }
        rain: number
        weather: {
            main: string
        }[]
    }[]
}

const defaultForecastData: ForecastData = {
    list: [
        {
            dt: 0,
            main: {
                temp: 0,
            },
            rain: 0,
            weather: [
                {
                    main: '',
                },
            ],
        },
    ],
}

interface WeatherProviderProps {
    children: ReactNode
}

const fetchWeather = async (location: string): Promise<WeatherData> => {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location},uk&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
    )
    if (!response.ok) {
        throw new Error('Network response for current weather was not ok')
    }
    const data = await response.json()
    // I have chosen to only return that which I'm using to make handling the data a bit cleaner
    return {
        name: data.name,
        weather: data.weather,
        sys: { sunrise: data.sys.sunrise, sunset: data.sys.sunset },
        main: { temp: data.main.temp },
        rain: data.rain?.['3h'] || 0,
        wind: { speed: data.wind.speed },
    }
}

const fetchForecast = async (location: string): Promise<ForecastData> => {
    const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${location},uk&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
    )
    if (!response.ok) {
        throw new Error('Network response for forecast was not ok')
    }
    const data = await response.json()
    // Same as above, only returning what I'm using so that the data isn't bloated and intellisense is cleaner
    return {
        list: data.list.map((item: any) => ({
            dt: item.dt,
            main: { temp: item.main.temp },
            rain: item.rain?.['3h'] || 0,
            weather: item.weather[0],
        })),
    }
}

interface WeatherContextData {
    weather: UseQueryResult<WeatherData, unknown>
    forecast: UseQueryResult<ForecastData, unknown>
    setLocation: (location: string) => void
}

const WeatherContext = createContext<WeatherContextData | undefined>(undefined)

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [location, setLocation] = useState('London');
  const weather = useQuery(['weather', location], () => fetchWeather(location));
  const forecast = useQuery(['forecast', location], () => fetchForecast(location));
    return <WeatherContext.Provider value={{ weather, forecast, setLocation }}>{children}</WeatherContext.Provider>
}

export function useWeather() {
    const context = useContext(WeatherContext)
    if (!context) {
        throw new Error('useWeather must be used within a WeatherProvider')
    }
    return context
}
