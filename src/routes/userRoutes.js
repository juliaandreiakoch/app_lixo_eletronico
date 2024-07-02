import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import { Login } from '../pages/login'
import { Signup } from '../pages/signup'
import { Welcome } from '../pages/welcome'
import { Feed } from '../pages/feed'
import { User } from '../pages/user'
import { Product } from '../pages/product';
import { CreatePost } from '../pages/createPost';
import { Disposal } from '../pages/disposal';

const Stack = createNativeStackNavigator();

export function UserRoutes(){
  const [user, setUser] = useState(null);

  const changeStatus = (newUser) => {
    setUser(newUser);
  }

  if(!user){
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name='Welcome'
              component={Welcome}
              options={{ headerShown: false }}
              initialParams={{ changeStatus }}
            />
            <Stack.Screen 
              name='Login'
              component={Login}
              options={{ headerShown: false }}
              initialParams={{ changeStatus }}
            />
            <Stack.Screen 
              name='Signup'
              component={Signup}
              options={{ headerShown: false }}
              initialParams={{ changeStatus }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Feed'
          component={Feed}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Disposal'
          component={Disposal}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='User'
          component={User}
          options={{ headerShown: false }}
          initialParams={{ user, changeStatus}}
        />
        <Stack.Screen 
          name='Product'
          component={Product}
          options={{ headerShown: false }}
        />
         <Stack.Screen 
          name='CreatePost'
          component={CreatePost}
          options={{ headerShown: false }}
          initialParams={{ user, changeStatus}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
