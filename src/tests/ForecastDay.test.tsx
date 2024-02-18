import { render, screen } from '@testing-library/react';
import ForecastDay from '../components/ForecastDay';

const mockOneDayForecast = [
    {
        dt: 1631232000,
        main: {
            temp: 25,
        },
        rain: 0,
        weather: {
            main: 'Sunny',
        },
        time: '12:00 PM',
    },
    {
        dt: 1631242800,
        main: {
            temp: 20,
        },
        rain: 0,
        weather: {
            main: 'Cloudy',
        },
        time: '3:00 PM',
    },
];

describe('ForecastDay', () => {
    it('should render single forecast correctly', async () => {
        render(
            <ForecastDay
                oneDayForecast={mockOneDayForecast.slice(0, 1)}
                forecastType="weather"
            />
        );
        const forecastDay = await screen.queryAllByLabelText('forecast-blob');
        expect(forecastDay.length).toBe(1);
    });

    it('should render the correct number of timed forecasts', async() => {
        render(
            <ForecastDay
                oneDayForecast={mockOneDayForecast}
                forecastType="weather"
            />
        );
        const forecastDay = await screen.queryAllByLabelText('forecast-blob');
        expect(forecastDay.length).toBe(mockOneDayForecast.length);
    });
});
