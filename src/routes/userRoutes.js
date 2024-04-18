import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../pages/login'
import { Signup } from '../pages/signup'
import { Welcome } from '../pages/welcome'
import { Feed } from '../pages/feed'

const Stack = createNativeStackNavigator();

export function UserRoutes(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name='Welcome'
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Signup'
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Feed'
          component={Feed}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}