import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

interface ListItemProps {
  dt: string
  min: number
  max: number
  condition: string
}

const ListItem = (props: ListItemProps) => {
  const { dt, min, max } = props

  const { item, date, temp } = styles

  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={date}>{dt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#094580'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  }
})

export default ListItem
