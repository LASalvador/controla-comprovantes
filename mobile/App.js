import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import formScreen from './src/screen/formScreen';
import homeScreen from './src/screen/homeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={homeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Form" component={formScreen} options={{ title: 'Cadastro' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;