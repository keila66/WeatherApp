import { StyleSheet, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListItem from '../components/ListItem'
import { IData } from '../types/types'

interface UpcomingWeatherProps {
  weatherData: IData[]
}

const UpcomingWeather = ({ weatherData }: UpcomingWeatherProps) => {
  const renderItem = ({ item }: { item: IData }) => (
    <ListItem
      condition={item.weather[0].main}
      dt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/upcoming-background.jpg')}
        style={image}
      >
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1
  }
})

export default UpcomingWeather
