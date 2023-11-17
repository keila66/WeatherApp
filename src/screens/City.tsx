import { ImageBackground, StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconText from '../components/IconText'
import { ICity } from '../types/types'
import moment from 'moment'

interface CityProps {
  weatherData: ICity
}

const City = ({ weatherData }: CityProps) => {
  const s = styles
  const { name, country, population, sunrise, sunset } = weatherData

  const sunriseDate = moment(sunrise * 1000).format('h:mm:ss')
  const sunsetDate = moment(sunset * 1000).format('h:mm:ss')

  return (
    <SafeAreaView style={s.container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={s.imageLayout}
      >
        <Text style={[s.cityName, s.cityText]}>{name}</Text>
        <Text style={[s.countryName, s.cityText]}>{country}</Text>
        <IconText
          iconName={'user'}
          color={'#094580'}
          bodyText={population}
          bodyTextStyles={s.populationText}
          wrapperTextStyles={s.populationWrapper}
        />
        <IconText
          iconName={'sunrise'}
          color={'white'}
          bodyText={sunriseDate}
          bodyTextStyles={s.riseSetText}
          wrapperTextStyles={s.riseSetWrapper}
        />
        <IconText
          iconName={'sunset'}
          color={'white'}
          bodyText={sunsetDate}
          bodyTextStyles={s.riseSetText}
          wrapperTextStyles={s.riseSetWrapper}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageLayout: {
    flex: 1,
    justifyContent: 'center'
  },
  cityName: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fff'
  },
  countryName: {
    fontSize: 30,
    color: '#F98804'
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  populationWrapper: {
    justifyContent: 'center'
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: '#094580'
  },
  riseSetWrapper: {
    justifyContent: 'space-around'
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  }
})

export default City
