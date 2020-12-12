import * as React from 'react';
import { RootProvider } from './src/context/RootContext';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from './src/screens/Home';
import Detail from './src/screens/Detail'
const Stack = createStackNavigator();

export default function App() {
  return (
    <RootProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootProvider>
  );
}
