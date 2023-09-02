import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import PassoStack from '../components/passoStack'
import Podcast from '../views/Podcast'

const Stack = createNativeStackNavigator()

export default props => {
  console.log('INDEX', props.navigation.state.params.access)

  const access = props.navigation.state.params.access

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" options={{ title: 'informações iniciais' }}>
            {props => (
              <Home {...props} access={access} />
            )}
          </Stack.Screen>
          <Stack.Screen name='Podcast'>
            {props => (
              <Podcast {...props} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}