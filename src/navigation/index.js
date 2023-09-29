import React from 'react'
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import Podcast from '../views/Podcast'
import Add from '../views/Add';

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
          <Stack.Screen name='Add' component={Add} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
