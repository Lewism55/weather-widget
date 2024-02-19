import { convertDateTime, groupForecastByDate, formatOptions } from '../utils/Utils';
import { mockAPIForecastData, mockForecastData } from './mocks';

describe('Utils', () => {
    describe('convertDateTime', () => {
        it('should convert a valid date string to a formatted date', () => {
            const inputDate = 1704067200;
            const expectedOutput = '00:00';

            const actualOutput = convertDateTime(inputDate);

            expect(actualOutput).toEqual(expectedOutput);
        });
    });

    describe('groupForecastByDate', () => {
        it('should group forecast items by date', () => {
            const actualOutput = groupForecastByDate(mockAPIForecastData);

            expect(actualOutput).toEqual(mockForecastData);
        });
    });

    describe('formatOptions', () => {
        const options = ['option1', 'option2', 'option3'];
        const expectedOutput = [
            {value: 'option1', label: 'option1'},
            {value: 'option2', label: 'option2'},
            {value: 'option3', label: 'option3'}
        ];

        it('should format options array into a string', () => {
            const actualOutput = formatOptions(options);

            expect(actualOutput).toEqual(expectedOutput);
        });
    });
});
