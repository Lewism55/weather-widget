export interface oneDayForecast {
    dt: number
    main: {
        temp: number
    }
    rain: number
    weather: {
        main: string
    }
    time: string
}