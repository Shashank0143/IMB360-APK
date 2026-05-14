import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Splash1 from '../screens/splash/Splash1'
import Splash2 from '../screens/splash/Splash2'
import Splash3 from '../screens/splash/Splash3'

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Splash1"
        component={Splash1}
      />

      <Stack.Screen
        name="Splash2"
        component={Splash2}
      />

      <Stack.Screen
        name="Splash3"
        component={Splash3}
      />
    </Stack.Navigator>
  )
}