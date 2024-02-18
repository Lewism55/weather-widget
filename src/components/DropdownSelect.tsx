import ReactSelect from 'react-select'

interface DropdownSelectProps {
    selectedOption: string
    options: { value: string; label: string }[]
    onChange: (option: string) => void
    size: 'large' | 'small'
}

const DropdownSelect = ({ selectedOption, options, onChange, size }: DropdownSelectProps) => {
    const handleChange = (selectedOption: any) => {
        const choice = selectedOption.value
        if (choice === selectedOption) return
        onChange(choice)
    }

    // ts ignores below are solely due to the fact that the react-select library is not playing nicely
    const customStyles = {
        // @ts-ignore
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#DCDDDD' : state.isFocused ? '#f7fcfe' : 'white',
            '&:hover': {
                cursor: 'pointer',
            },
        }),
        // @ts-ignore
        control: (provided) => ({
            ...provided,
            border: 'none',
            backgroundColor: '#f7fcfe',
            boxShadow: 'none',
            '&:hover': {
                cursor: 'pointer',
                border: 'none',
            },
        }),
        // @ts-ignore
        singleValue: (provided) => ({
            ...provided,
            fontSize: size === 'large' ? '50px' : '16px',
            fontWeight: size === 'large' ? 'bold' : 'normal',
            color: size === 'large' ? 'black' : 'grey',
        }),
    }

    return (
        <ReactSelect
            options={options}
            value={{ value: selectedOption, label: selectedOption }}
            onChange={handleChange}
            styles={customStyles}
            isSearchable={false}
            components={{
                IndicatorSeparator: () => null,
            }}
        />
    )
}

export default DropdownSelect
