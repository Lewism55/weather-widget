import './App.css'
import styled from 'styled-components'
import Widget from './components/Widget'
import { WeatherProvider } from './context/WeatherContext'

const StyledApp = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

function App() {
    return (
        <WeatherProvider>
            <StyledApp>
                <Widget />
            </StyledApp>
        </WeatherProvider>
    )
}

export default App
