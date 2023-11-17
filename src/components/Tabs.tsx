/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { IWeather } from '../types/types'

const Tab = createBottomTabNavigator()

interface TabsProps {
  weather: IWeather
}

const Tabs = ({ weather }: TabsProps) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#F98804',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: () => null,
        tabBarIconStyle: {
          color: 'white'
        },
        tabBarStyle: {
          backgroundColor: '#f1f1f1'
        },
        headerStyle: {
          backgroundColor: '#f1f1f1'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: '#F98804'
        }
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? '#F98804' : '#094580'}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather?.list[0] || {}} />}
      </Tab.Screen>
      <Tab.Screen
        name={'Upcoming Weather'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? '#F98804' : '#094580'}
            />
          )
        }}
      >
        {() => <UpcomingWeather weatherData={weather?.list || []} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? '#F98804' : '#094580'}
            />
          )
        }}
      >
        {() => <City weatherData={weather?.city || {}} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default Tabs
