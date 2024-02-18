# Weather Widget

This project was created using Vite (npm create vite@latest) using a React Typescript template. 

## Project setup
First clone the repo locally and then run `npm install` in the root folder to install all dependencies.

To run the project, use the command: `npm run dev`.

You will require an API key for OpenWeather.co.uk to use the project. You can get one by signing up at [OpenWeatherMap](https://openweathermap.org/). Once you have an API key, you must create a file called `.env`. You can then add your key into this file as shown in the `.env.example` file in the project root. 

To run the tests you can use the command: `npm run test`.
(Note tests *should* all pass: 6 files, 21 passing tests)

### Notes
- Where possible, I have chosen to approach this task in a way that would show the most technical skill using the following frontend stack: React, Typescript, React Context, Vite, Vitest, React Testing Library, Styled Components and git/Github.
- In total I've probably spent ~6 hours working on this. I got a bit carried away with the amount of features I tried to implement. I also realised this would be a good project to put in my personal portfolio, so I spent a bit of extra time on it. I hope this is okay. 
- I have tested the core application components using Vitest, but not done any e2e/integration tests. They felt overkill for this application but if I needed to, I would have likely done this using Cypress. 

### Decision Making
- I chose to use React Context to manage the state of the weather and forecast data. This is because it is a simple application and I felt it would use excess boilerplate code to create seperate contexts. If the application were to grow with more seperation between current weather and forecast sections, I would likely split out these into seperate contexts which provide more specific data to the components which require them.
- I could have gone way further with the options within forecast, but kept it to two options for simplicity (weather or temperature). I've written these in a way which should make it easy to add more forecast options in the future. You'd just have to update some interfaces, add a new option in the dropdown and decide how you want to display the data.

### Further Improvement Suggestions:
- Add more options within the forecast dropdown.
- Make the location selector freetext (either within GB or worldwide...)
- add more svgs/icons for specific weather types (how heavy rain is for example)
- Add more animations to the application (I've only added a few simple ones to show I can use framer-motion)
- Add more tests (almost always a good idea!)

### non-core Vite Libraries Used:
- styled-components (for styling)
- framer-motion (for animations)
- Vitest (for testing)
- react-testing-library (for testing)
- @types/node (for environment variables, in this case the openweather api key)
- react-select (for the dropdown. I know this is a UI library, but it's the industry standard for non-native dropdowns and I felt it was appropriate to use it here. Note I also wrote no tests for my customised component as there are tests in the original library. I would write tests for this if I'd written a select component from scratch.)

### Icons/Images
Unfortunately, SVG creation / Icon design is not a skill I currently possess. As such I used this excellent free weather Icon Library I found for this project: https://www.amcharts.com/free-animated-svg-weather-icons/