import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { WeatherContext } from '../context/WeatherContext'
import Forecast from '../components/Forecast'
import { mockWeatherData, mockForecastData } from './mocks'

describe('Forecast', () => {
    it('displays the default forecast and weatherType dropdown values', async () => {
        render(
            <WeatherContext.Provider
                value={{ weatherData: mockWeatherData, forecastData: mockForecastData, isLoading: false, location: '', setLocation: vi.fn() }}
            >
                <Forecast />
            </WeatherContext.Provider>,
        )

        const date = await screen.findByText('01/01/2024')
        const placeholder = await screen.findByText('weather')

        expect(date).toBeDefined()
        expect(placeholder).toBeDefined()
    })

    it('doesnt show the other dates or placeholders', async () => {
        render(
            <WeatherContext.Provider
                value={{ weatherData: mockWeatherData, forecastData: mockForecastData, isLoading: false, location: '', setLocation: vi.fn() }}
            >
                <Forecast />
            </WeatherContext.Provider>,
        )

        const date = await screen.queryByText('02/01/2024')
        const placeholder = await screen.queryByText('temperature')

        expect(date).toBeNull()
        expect(placeholder).toBeNull()
    })

    it('displays the correct time (in forecastTime) based on the date selected', async () => {
        render(
            <WeatherContext.Provider
                value={{ weatherData: mockWeatherData, forecastData: mockForecastData, isLoading: false, location: '', setLocation: vi.fn() }}
            >
                <Forecast />
            </WeatherContext.Provider>,
        )

        const time = await screen.findByText('00:00')

        expect(time).toBeDefined()
    })
})
