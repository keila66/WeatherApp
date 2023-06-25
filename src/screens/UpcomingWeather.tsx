import { Text, StyleSheet, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListItem from '../components/ListItem'

interface IData {
  dt: string
  main: {
    temp_min: number
    temp_max: number
  }
  weather: [
    {
      main: string
    }
  ]
}

const DATA: IData[] = [
  {
    dt: '2023-02-18 12:00:00',
    main: {
      temp_min: 8.34,
      temp_max: 7.24
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt: '2023-02-18 15:00:00',
    main: {
      temp_min: 8.34,
      temp_max: 7.24
    },
    weather: [
      {
        main: 'Clouds'
      }
    ]
  },
  {
    dt: '2023-02-18 18:00:00',
    main: {
      temp_min: 8.34,
      temp_max: 7.24
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]

const UpcomingWeather = () => {
  const renderItem = ({ item }: { item: IData }) => (
    <ListItem
      condition={item.weather[0].main}
      dt={item.dt}
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
          data={DATA}
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
