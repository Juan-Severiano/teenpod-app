import React, { Component } from 'react'
import { Image, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'


export default props => {
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10
    }}>
      <Image source={require('../../assets/teenpod.png')} style={{
        maxWidth: 100,
        maxHeight: 100
      }} />
    </View>
  )
}
