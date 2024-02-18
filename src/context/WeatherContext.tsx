import React, { createContext, useState, useEffect, useCallback, useContext } from 'react'
import { ReactNode } from 'react'
import { convertDateTime, groupForecastByDate } from '../utils/Utils'

// Interfaces of simplified API responses. I don't want to have to dig through so have just kept what data I need.
export interface WeatherData {
    name: string
    weather: { main: string }[]
    sys: { sunrise: number | string; sunset: number | string }
    main: { temp: number }
    rain?: number
    wind: { speed: number }
}

export interface ForecastData {
    [key: string]: {
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

// Default values for the context
export const defaultWeatherData: WeatherData = {
    name: '',
    weather: [{ main: '' }],
    sys: { sunrise: 0, sunset: 0 },
    rain: 0,
    main: { temp: 0 },
    wind: { speed: 0 },
}

const defaultForecastData: ForecastData = {
    ['01/01/0000']: [
        {
            dt: 0,
            main: {
                temp: 0,
            },
            rain: 0,
            weather: {
                main: '',
            },
            time: '00:00',
        },
    ],
}

interface WeatherContextData {
    weatherData: WeatherData
    forecastData: ForecastData
    isLoading: boolean
    location: string
    setLocation: React.Dispatch<React.SetStateAction<string>>
    refresh: () => void
}

const WeatherContext = createContext<WeatherContextData>({
    weatherData: defaultWeatherData,
    forecastData: defaultForecastData,
    isLoading: false,
    location: '',
    setLocation: () => {},
    refresh: () => {},
})

interface WeatherProviderProps {
    children: ReactNode
}

const WeatherProvider = ({ children }: WeatherProviderProps) => {
    const [weatherData, setWeatherData] = useState<WeatherData>(defaultWeatherData)
    const [forecastData, setForecastData] = useState<ForecastData>(defaultForecastData)
    const [isLoading, setIsLoading] = useState(false)
    const [location, setLocation] = useState('London')

    const fetchWeatherData = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${location},uk&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
            )
            const data = await response.json()
            const simplifiedData = {
                name: data.name,
                weather: data.weather,
                sys: { sunrise: convertDateTime(data.sys.sunrise), sunset: convertDateTime(data.sys.sunset) },
                main: { temp: Math.round(data.main.temp) },
                rain: data.rain?.['3h'] || 0,
                wind: { speed: Math.round(data.wind.speed) },
            }
            setWeatherData(simplifiedData)
        } catch (error) {
            console.error('Failed to fetch weather data:', error)
        } finally {
            setIsLoading(false)
        }
    }, [location])

    const fetchForecastData = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?q=${location},uk&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`,
            )
            const data = await response.json()
            const simplifiedData = groupForecastByDate({
                list: data.list.map((item: any) => ({
                    dt: item.dt,
                    main: { temp: Math.round(item.main.temp) },
                    rain: item.rain?.['3h'] || 0,
                    weather: item.weather[0],
                })),
            })
            setForecastData(simplifiedData)
        } catch (error) {
            console.error('Failed to fetch forecast data:', error)
        } finally {
            setIsLoading(false)
        }
    }, [location])

    useEffect(() => {
        fetchWeatherData()
        fetchForecastData()
    }, [fetchWeatherData, fetchForecastData])

    const refresh = () => {
        fetchWeatherData()
        fetchForecastData()
    }

    return <WeatherContext.Provider value={{ weatherData, forecastData, isLoading, location, setLocation, refresh }}>{children}</WeatherContext.Provider>
}

function useWeather() {
    const context = useContext(WeatherContext)
    if (!context) {
        throw new Error('useWeather must be used within a WeatherProvider')
    }
    return context
}

export { WeatherProvider, useWeather }
