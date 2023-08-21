import React, { Component } from 'react'
import { View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'


export default props => {
  return (
    <View style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: 20
    }}>
      <Ionicons name='settings-outline' size={28} color='#fff' />
    </View>
  )
}
