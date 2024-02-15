import styled from 'styled-components'
import { useWeather } from '../context/WeatherContext';

const StyledWidget = styled.div`
  width: 300px;
  height: 450px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`

function Widget() {
  const { isLoading, error, data } = useWeather();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  if (!data) return <div>No data available</div>;

  return (
    <StyledWidget>
      <h1>{data.name}</h1>
      <h4>{data.weather[0].main}</h4>
      <p>Temperature: {data.main.temp}°C</p>
      <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString('uk', { hour: '2-digit', minute: '2-digit' })}</p>
      <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString('uk', { hour: '2-digit', minute: '2-digit' })}</p>
      <p>Wind speed: {data.wind.speed} m/s</p>
    </StyledWidget>
  )
}


export default Widget