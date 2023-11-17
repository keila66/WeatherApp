import { IWeatherTypes } from '../types/types'

export const weatherType: IWeatherTypes = {
  Thunderstorm: {
    icon: 'zap',
    message: 'It could get noisy',
    background: require('../../assets/thunderstorm.jpg')
  },
  Drizzle: {
    icon: 'cloud-rain',
    message: 'It might rains a little',
    background: require('../../assets/drizzle.jpg')
  },
  Rain: {
    icon: 'umbrella',
    message: 'You will need an umbrella',
    background: require(`../../assets/rain.jpg`)
  },
  Snow: {
    icon: 'cloud-snow',
    message: 'Lets build a snowman',
    background: require('../../assets/snow.jpg')
  },
  Clear: {
    icon: 'sun',
    message: 'It is perfect t-shirt weather',
    background: require('../../assets/clear.jpg')
  },
  Clouds: {
    icon: 'cloud',
    message: 'You could live in the clouds',
    background: require('../../assets/clouds.jpg')
  },
  Haze: {
    icon: 'wind',
    message: 'It might be a bit damp',
    background: require('../../assets/haze.jpg')
  },
  Mist: {
    icon: 'align-justify',
    message: 'It might be hard to see',
    background: require('../../assets/mist.jpg')
  }
}
