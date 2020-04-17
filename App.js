import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from './app/screens'

const Stack = createStackNavigator();
function MStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          gestureEnabled: true,
          headerShown: false
        }}
        >

        <Stack.Screen name="Splash" component={Screens.Splash} />
        <Stack.Screen name="Home" component={Screens.Home} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MStack
