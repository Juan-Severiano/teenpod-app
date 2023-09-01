import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Auth from '../views/Login'
import index from './index'

const mainRoutes = {
  Auth: {
    name: 'Auth',
    screen: Auth,
  },
  Home: {
    name: 'Home',
    screen: index,
  }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
  initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)