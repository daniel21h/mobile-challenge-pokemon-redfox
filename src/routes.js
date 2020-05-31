import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

import Pokemons from './pages/Pokemons'

export default function Routes() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator 
        screenOptions={{ 
          headerShown: false,

        }}
      >
        <Stack.Screen name="Pokemons" component={Pokemons} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}