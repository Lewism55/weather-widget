import { createContext, useContext, ReactNode } from 'react';
import { useQuery, UseQueryResult } from 'react-query';

interface WeatherData {
  name: string;
  weather: { main: string }[];
  sys: { sunrise: number; sunset: number };
  main: { temp: number };
  wind: { speed: number };
}

interface WeatherProviderProps {
  children: ReactNode;
}

const fetchWeather = async (): Promise<WeatherData> => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${import.meta.env.VITE_OPEN_WEATHER_API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};


const WeatherContext = createContext<UseQueryResult<WeatherData, unknown> | undefined>(undefined);

export function WeatherProvider({ children }: WeatherProviderProps) {
  const weather = useQuery('weather', fetchWeather);
  return <WeatherContext.Provider value={weather}>
    {children}</WeatherContext.Provider>;
}

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}