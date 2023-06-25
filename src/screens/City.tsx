import { ImageBackground, StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconText from '../components/IconText'

const City = () => {
  const s = styles

  return (
    <SafeAreaView style={s.container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={s.imageLayout}
      >
        <Text style={[s.cityName, s.cityText]}>London</Text>
        <Text style={[s.countryName, s.cityText]}>UK</Text>
        <IconText
          iconName={'user'}
          color={'red'}
          bodyText={'80000'}
          bodyTextStyles={s.populationText}
          wrapperTextStyles={s.populationWrapper}
        />
        <IconText
          iconName={'sunrise'}
          color={'white'}
          bodyText={'10:46:58am'}
          bodyTextStyles={s.riseSetText}
          wrapperTextStyles={s.riseSetWrapper}
        />
        <IconText
          iconName={'sunset'}
          color={'white'}
          bodyText={'17:28:15pm'}
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
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center'
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
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
