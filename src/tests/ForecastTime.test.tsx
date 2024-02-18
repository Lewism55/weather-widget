import { render, screen } from '@testing-library/react'
import ForecastTime from '../components/ForecastTime'

describe('ForecastTime', () => {
    const mockPropsWeather = {
        forecastType: 'weather',
        weather: 'Sunny',
        temp: 25,
        startTime: '12:00 PM',
    }

    const mockPropsTemperature = {
        forecastType: 'temperature',
        weather: 'Sunny',
        temp: 25,
        startTime: '12:00 PM',
    }

    it('renders', () => {
        render(<ForecastTime {...mockPropsWeather} />)
    })

    it('renders the weather icon if forecastType is weather', async () => {
        render(<ForecastTime {...mockPropsWeather} />)
        const weatherElement = await screen.queryByRole('img')
        expect(weatherElement).toBeDefined()
    })

    it('doesnt render the weather icon if forecastType is temperature', async () => {
        render(<ForecastTime {...mockPropsTemperature} />)
        const weatherElement = await screen.queryByRole('img')
        expect(weatherElement).toBeNull()
    })

    it('renders the temperature value if forecastType is temperature', async () => {
        render(<ForecastTime {...mockPropsTemperature} />)
        const temperatureElement = await screen.findByText(`${mockPropsTemperature.temp}°c`)
        expect(temperatureElement).toBeDefined()
    })

    it('doesnt render the temperature icon if forecastType is weather', async () => {
        render(<ForecastTime {...mockPropsWeather} />)
        const temperatureElement = await screen.queryByText(`${mockPropsTemperature.temp}°c`)
        expect(temperatureElement).toBeNull()
    })

    it('renders the start time', async () => {
        render(<ForecastTime {...mockPropsWeather} />)
        const startTimeElement = await screen.getByText(mockPropsWeather.startTime)
        expect(startTimeElement).toBeDefined()
    })
})
