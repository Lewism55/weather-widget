import { useState } from 'react'

interface LocationSelectorProps {
    onChange: (location: string) => void
    selectedCity: string
}

const cities = ['London', 'Cardiff', 'Belfast', 'Edinburgh', 'Manchester']

const LocationSelector = ({ onChange, selectedCity }: LocationSelectorProps) => {
    const [currentCity, setCurrentCity] = useState(selectedCity)

    const handleChange = (city: string) => {
        if (city === currentCity) return
        setCurrentCity(city)
        onChange(city)
    }

    // to be replaced with react select dropdown
    return (
        <select value={currentCity} onChange={(e) => handleChange(e.target.value)}>
            {cities.map((city) => (
                <option key={city} value={city}>
                    {city}
                </option>
            ))}
        </select>
    )
}

export default LocationSelector
