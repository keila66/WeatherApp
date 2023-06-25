import { Text, View } from 'react-native'
import React from 'react'

interface RowTextProps {
  messageOne: string
  messageTwo: string
  containerStyles: {
    justifyContent?: 'flex-end'
    alignItems?: 'flex-start'
    paddingLeft?: number
    marginBottom?: number
    flexDirection?: 'row'
  }
  messageOneStyles: {
    color?: string
    fontSize: number
  }
  messageTwoStyles: {
    color?: string
    fontSize: number
  }
}

const RowText = ({
  messageOne,
  messageTwo,
  containerStyles,
  messageOneStyles,
  messageTwoStyles
}: RowTextProps) => {
  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  )
}

export default RowText
