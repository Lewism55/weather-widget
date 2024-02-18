import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Weather from '../components/Weather'
import { WeatherContext } from '../context/WeatherContext'
import { mockWeatherData, mockForecastData } from './mocks'

describe('Weather', () => {
    it('displays the different weather fields shown in weather component', async () => {
        render(
            <WeatherContext.Provider
                value={{ weatherData: mockWeatherData, forecastData: mockForecastData, isLoading: false, location: '', setLocation: vi.fn(), refresh: vi.fn() }}
            >
                <Weather />
            </WeatherContext.Provider>,
        )

        const temp = await screen.findByText(`${mockWeatherData.main.temp}°c`)
        const sunrise = await screen.findByText(`Sunrise: ${mockWeatherData.sys.sunrise}`)
        const sunset = await screen.findByText(`Sunset: ${mockWeatherData.sys.sunset}`)
        const wind = await screen.findByText(`${mockWeatherData.wind.speed} m/s`)

        expect(temp).toBeDefined()
        expect(sunrise).toBeDefined()
        expect(sunset).toBeDefined()
        expect(wind).toBeDefined()
    })
})
