import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const ErrorItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMessage}>Sorry,
       something went wrong</Text>
        <Feather name='frown' size={100} color={'#fff'}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F98804',
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorMessage: {
        fontSize: 30,
        color: '#fff',
        marginHorizontal:20,
        textAlign: 'center',
        width: 250
    }
})

export default ErrorItem
