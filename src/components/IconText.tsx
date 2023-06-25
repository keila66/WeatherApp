import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

interface IconTextProps {
  iconName: any
  color: string
  bodyText: string
  bodyTextStyles: {
    fontSize: number
    color: string
  }
  wrapperTextStyles: {
    justifyContent: 'center' | 'space-around'
  }
}

const IconText = ({
  iconName,
  color,
  bodyText,
  bodyTextStyles,
  wrapperTextStyles
}: IconTextProps) => {
  return (
    <View style={[styles.container, wrapperTextStyles]}>
      <Feather name={iconName} size={50} color={color} />
      <Text style={[styles.textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  )
}

export default IconText

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30
  },
  textTheme: {
    fontWeight: 'bold'
  }
})
