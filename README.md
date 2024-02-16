# Weather Widget

This project was created using Vite (npm create vite@latest) using a React Typescript template. 

## Project setup
First clone the repo locally and then run `npm install` in the root folder to install all dependencies.

To run the project, use the command: `npm run dev`.

You will require an API key for OpenWeather.co.uk to use the project. You can get one by signing up at [OpenWeatherMap](https://openweathermap.org/). Once you have an API key, you must create a file called `.env`. You can then add your key into this file as shown in the `.env.example` file in the project root. 

### Notes
- Where possible, I have chosen to approach this task in a way that would show the most technical skill using Edozo frontend stack. In terms of what's appropriate I believe this includes: React, Typescript, React Context, Vite, ViteTest (Vitest), React Testing Library, Styled Components and Github.
- In total I've probably spent ~4 hours working on this. I got a bit carried away with the amount of features I tried to implement. 
- I have tested the core application components using Vitest, but not done any e2e/integration tests. They felt overkill for this application but if I needed to, I would have done this using Cypress or Playwright.

### Decision Making
- I have, where possible, tried to make architectural design choices which display the most varied amount of skill. Often these were a 50-50 toss ups anyway, but I've tried to make decisions which would show off the most varied amount of skill, not necessarily always the most scalable long term. I'm happy to discuss these decisions in more detail if reuqired. 
- I chose to use React Context to manage the state of the weather and forecast data. This is because it is a simple application and I felt it would use excess boilerplate code to create seperate contexts. If the application were to grow with more seperation between current weather and forecast, I would likely split out these into seperate contexts which provide more specific data to the components which require them.
- I chose to keep the 'forecast day selection' as a standard state as I felt it would better display prop drilling/understanding of basic react state.
- I could have gone way further with the options within forecast, but kept it to two options for simplicity. I've written these in a way which should make it easy to add more forecast options in the future.

### non-core Vite Libraries Used:
- styled-components (for styling)
- framer-motion (for animations)
- vitest (for testing)
- react-testing-library (for testing)
- @types/node (for environment variables, in this case the openweather api key)
- react-query (for api calls, Note this was my first time using this library, I wanted to test it out as I've heard great things!)