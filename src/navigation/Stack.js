import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import PassoStack from '../components/passoStack'
import Podcast from '../views/Podcast'

const Stack = createNativeStackNavigator()

export default props => {
  console.log('STACK', + props)
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" options={{ title: 'informações iniciais' }}>
        {props => (
          <Home {...props} />
        )}
      </Stack.Screen>
      <Stack.Screen name='Podcast'>
        {props => (
            <Podcast {...props} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  )
}