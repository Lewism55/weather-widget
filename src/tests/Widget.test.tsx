import { render, screen} from '@testing-library/react'
import Widget from '../components/Widget'
import { vi } from 'vitest'
import { WeatherContext } from '../context/WeatherContext'
import { mockWeatherData, mockForecastData } from './mocks'

describe('Widget', () => {
    it('displays the location based on the weather data provided', async () => {
        render(
            <WeatherContext.Provider
                value={{ weatherData: mockWeatherData, forecastData: mockForecastData, isLoading: false, location: '', setLocation: vi.fn(), refresh: vi.fn() }}
            >
                <Widget />
            </WeatherContext.Provider>,
        )

        const location = await screen.findByText(mockWeatherData.name)

        expect(location).toBeDefined()
    })
})
