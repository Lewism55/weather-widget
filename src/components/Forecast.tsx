import { useState } from 'react'
import { useWeather } from '../context/WeatherContext'
import styled from 'styled-components'
import ForecastDay from './ForecastDay'
import { formatOptions } from '../utils/Utils'
import DropdownSelect from './DropdownSelect'
import { forecastOptions } from '../utils/constants'

const ForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`

const ForecastSelections = styled.div`
    display: flex;
    flex-direction: row;
    width: 90%;
    justify-content: space-between;
    margin: 0px 10%;
    border-bottom: 1px solid #dcdddd;
`

const Forecast = () => {
    const [forecastType, setForecastType] = useState<string>('weather')
    const { forecastData } = useWeather()
    const [selectedDate, setSelectedDate] = useState(Object.keys(forecastData)[0] || '')

    const dates = Object.keys(forecastData)
    const dropdownDates = formatOptions(dates)

    return (
        <ForecastWrapper>
            <ForecastSelections>
                <DropdownSelect options={dropdownDates} selectedOption={selectedDate} onChange={setSelectedDate} size='small' />
                <DropdownSelect options={forecastOptions} selectedOption={forecastType} onChange={setForecastType} size='small' />
            </ForecastSelections>
            <ForecastDay oneDayForecast={forecastData[selectedDate]} forecastType={forecastType} />
        </ForecastWrapper>
    )
}

export default Forecast
