import { useState, useEffect } from 'react'
import { WEATHER_API_KEY } from '@env'
import * as Location from 'expo-location'

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [weather, setWeather] = useState<any>(null)
  const [lat, setLat] = useState<number | null>(null)
  const [lon, setLon] = useState<number | null>(null)


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setError('permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({})
      
      setLat(location.coords.latitude)
      setLon(location.coords.longitude)
      await fetchWeatherData()
    })()
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon])
  
  
  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&cnt=10`
      )
      const data = await res.json()
      if(data.cod === "400") {
        setError('Erro')
      }
      setError('')
      setWeather(data)
    } catch (err) {
      setError('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  return {
    weather: weather,
    loading: loading,
    error: error
  }
}
