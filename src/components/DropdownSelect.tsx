import ReactSelect, { StylesConfig } from 'react-select'

interface DropdownSelectProps {
    selectedOption: string
    options: { value: string; label: string }[]
    onChange: (option: string) => void
    size: 'large' | 'small'
}

export type OptionType = {
    label: string
    value: string
}

type IsMulti = false;

// Using a wrapper to ensure consistent use across the project. Also allows for these two 'size' type options for consistency in ui style.
const DropdownSelect = ({ selectedOption, options, onChange, size }: DropdownSelectProps) => {
    const handleChange = (selectedOption: any) => {
        const choice = selectedOption.value
        if (choice === selectedOption) return
        onChange(choice)
    }

    // Solution to fiddly typing from React-Select: https://stackoverflow.com/questions/63696310/how-to-use-typescript-with-the-definition-of-custom-styles-for-a-select-using-re
    const customStyles: StylesConfig<OptionType, IsMulti>= {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#DCDDDD' : state.isFocused ? '#f7fcfe' : 'white',
            '&:hover': {
                cursor: 'pointer',
            },
        }),
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
