export  type TypesList =  'Thunderstorm'|
 'Drizzle'|
 'Rain'|
 'Snow'|
 'Clear'|
 'Clouds'|
 'Haze'|
 'Mist'

export interface IWeatherType {
  icon: any
  message: string
  background: any
}

export interface IWeatherTypes {
  Thunderstorm: IWeatherType
  Drizzle: IWeatherType
  Rain: IWeatherType
  Snow: IWeatherType
  Clear: IWeatherType
  Clouds: IWeatherType
  Haze: IWeatherType
  Mist: IWeatherType
}

export interface IData {
  dt: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
  }
  weather: [
    {
      main:TypesList
      description: string
    }
  ],
  dt_txt: string
}

export interface ICity {
  id: number
  name: string
  country: string
  population: string
  sunrise: number
  sunset: number
}

export interface IWeather {
  list: IData[]
  city: ICity
}
