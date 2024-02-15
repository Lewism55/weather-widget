import './App.css'
import styled from 'styled-components'
import Widget from './components/Widget'
import { QueryClient, QueryClientProvider } from 'react-query'
import { WeatherProvider } from './context/WeatherContext'

const StyledApp = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <WeatherProvider>
                <StyledApp>
                    <Widget />
                </StyledApp>
            </WeatherProvider>
        </QueryClientProvider>
    )
}

export default App
