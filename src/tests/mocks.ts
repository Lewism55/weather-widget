import { ForecastData, WeatherData } from "../context/WeatherContext"
import { ApiForecastData } from "../utils/Utils"

export const mockWeatherData: WeatherData = {
    name: 'London',
    weather: [{ main: 'clear' }],
    sys: { sunrise: 0, sunset: 0 },
    rain: 0,
    main: { temp: 10 },
    wind: { speed: 0 },
}

export const mockForecastData: ForecastData= {
    ['01/01/2024']: [
        {
            dt: 1704067200,
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
    ['02/01/2024']: [
        {
            dt: 1704164400,
            main: {
                temp: 0,
            },
            rain: 0,
            weather: {
                main: '',
            },
            time: '03:00',
        },
    ],
    ['03/01/2024']: [
        {
            dt: 1704261600,
            main: {
                temp: 0,
            },
            rain: 0,
            weather: {
                main: '',
            },
            time: '06:00',
        },
    ],
    ['04/01/2024']: [
        {
            dt: 1704358800,
            main: {
                temp: 0,
            },
            rain: 0,
            weather: {
                main: '',
            },
            time: '09:00',
        },
    ],
}

export const mockAPIForecastData: ApiForecastData = {
    list: [
        {
            dt: 1704067200,
            main: {
                temp: 0,
            },
            rain: 0,
            weather: {
                main: '',
            },
            time: '00:00',
        },
        {
            dt: 1704164400,
            main: {
                temp: 0,
            },
            rain: 0,
            weather: {
                main: '',
            },
            time: '03:00',
        },
        {
            dt: 1704261600,
            main: {
                temp: 0,
            },
            rain: 0,
            weather: {
                main: '',
            },
            time: '06:00',
        },
        {
            dt: 1704358800,
            main: {
                temp: 0,
            },
            rain: 0,
            weather: {
                main: '',
            },
            time: '09:00',
        },
    ],
}
