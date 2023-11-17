import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'
import { IData } from '../types/types'

interface CurrentWeatherProps {
  weatherData: IData
}

const CurrentWeather = ({ weatherData }: CurrentWeatherProps) => {
  const s = styles

  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather
  } = weatherData

  const types = weatherType[weather[0].main]
  const messageOneFormating = weather[0].description.replace(/^\w/, (match) =>
    match.toUpperCase()
  )

  return (
    <SafeAreaView
      style={s.wrapper}
    >
      <ImageBackground
        source={types?.background}
        style={s.image}

      >
      <View style={s.container}>
        <Feather name={types?.icon} size={100} color="white" />
        <Text style={s.temp}>{temp.toFixed()}°C</Text>
        <Text style={s.feels}>Feels like {feels_like.toFixed()}°</Text>
        <RowText
          messageOne={`High: ${temp_max.toFixed()}° `}
          messageTwo={`Low: ${temp_min.toFixed()}°`}
          containerStyles={s.highLowWrapper}
          messageOneStyles={s.highLow}
          messageTwoStyles={s.highLow}
          />
      </View>
      <RowText
        messageOne={messageOneFormating}
        messageTwo={types?.message}
        containerStyles={s.bodyWrapper}
        messageOneStyles={s.description}
        messageTwoStyles={s.message}
        />
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
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
    fontSize: 20,
    fontWeight: '600'
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
    fontSize: 48,
    color: 'white'
  },
  message: {
    color: 'white',
    fontSize: 30
  },
  image: {
    flex: 1
  }
})

export default CurrentWeather
