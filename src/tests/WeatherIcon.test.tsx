import { render, screen} from '@testing-library/react'
import WeatherIcon from '../components/WeatherIcon'
import '@testing-library/jest-dom/vitest'

describe('WeatherIcon', () => {
    it('renders ClearIcon when weather is "clear"', async () => {
        render(<WeatherIcon weather="clear" size="large" />)
        const icon = await screen.queryByLabelText('clear-icon')
        expect(icon).toBeDefined()
    })

    it('renders CloudsIcon when weather is "clouds"', async () => {
        render(<WeatherIcon weather="clouds" size="large" />)
        const icon = await screen.queryByLabelText('clouds-icon')
        expect(icon).toBeDefined()
    })

    it('renders DrizzleIcon when weather is "drizzle"', async () => {
        render(<WeatherIcon weather="drizzle" size="large" />)
        const icon = await screen.queryByLabelText('drizzle-icon')
        expect(icon).toBeDefined()
    })

    it('renders FogIcon when weather is "fog"', async () => {
        render(<WeatherIcon weather="fog" size="large" />)
        const icon = await screen.queryByLabelText('fog-icon')
        expect(icon).toBeDefined()
    })

    it('renders RainIcon when weather is "rain"', async () => {
        render(<WeatherIcon weather="rain" size="large" />)
        const icon = await screen.queryByLabelText('rain-icon')
        expect(icon).toBeDefined()
    })

    it('renders SnowIcon when weather is "snow"', async () => {
        render(<WeatherIcon weather="snow" size="large" />)
        const icon = await screen.queryByLabelText('snow-icon')
        expect(icon).toBeDefined()
    })

    it('renders ThunderstormIcon when weather is "thunderstorm"', async () => {
        render(<WeatherIcon weather="thunderstorm" size="large" />)
        const icon = await screen.queryByLabelText('thunderstorm-icon')
        expect(icon).toBeDefined()
    })

    it('does not render any icon when weather is not one of the existing types', async () => {
        render(<WeatherIcon weather="abc" size="large" />)
        const icon = await screen.queryByRole('svg')
        expect(icon).toBeNull()
    })
})
