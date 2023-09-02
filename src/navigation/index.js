import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import Podcast from '../views/Podcast'

const Stack = createNativeStackNavigator()

export default props => {
  const access = props.navigation.state.params.access

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {props => (
              <Home {...props} access={access} />
            )}
          </Stack.Screen>
          <Stack.Screen name='Podcast' component={Podcast} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}