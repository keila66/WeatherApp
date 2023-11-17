import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType' 
import { TypesList } from '../types/types'
import moment from 'moment'

interface ListItemProps {
  dt: string
  min: number
  max: number
  condition: TypesList
}

const ListItem = (props: ListItemProps) => {
  const { dt, min, max, condition } = props

  const s = styles

  return (
    <View style={s.item}>
      <Feather name={weatherType[condition].icon} size={50} color={'white'} />
    <View style={s.dateWrapper}>
      <Text style={s.date}>{moment(dt).format('dddd')}</Text>
      <Text style={s.date}>{moment(dt).format('h:mm:ss')}</Text>
    </View>
      <Text style={s.temp}>{min.toFixed()}°C | {max.toFixed()}°C</Text>
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
    backgroundColor: '#094480c8'
    
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 18
  },
  dateWrapper: {
    flexDirection: 'column'
  }
})

export default ListItem
