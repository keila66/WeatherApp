import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = () => {
  const s = styles

  return (
    <SafeAreaView style={s.wrapper}>
      <View style={s.container}>
        <Feather name="sun" size={100} color="white" />
        <Text style={s.temp}>6</Text>
        <Text style={s.feels}>Feels like 5</Text>
        <RowText
          messageOne={'High: 8 '}
          messageTwo={'Low: 6'}
          containerStyles={s.highLowWrapper}
          messageOneStyles={s.highLow}
          messageTwoStyles={s.highLow}
        />
      </View>
      <RowText
        messageOne={'Its sunny'}
        messageTwo={weatherType['Thunderstorm'].message}
        containerStyles={s.bodyWrapper}
        messageOneStyles={s.description}
        messageTwoStyles={s.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#C68C99'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'white',
    fontSize: 48
  },
  feels: {
    color: 'white',
    fontSize: 30
  },
  highLow: {
    color: 'white',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather
