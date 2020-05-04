import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



import formScreen from './src/screen/formScreen';
import homeScreen from './src/screen/homeScreen';
import extratoScreen from './src/screen/extratoScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Inicio" component={homeScreen} />
        <Drawer.Screen name="Transacoes" component={formScreen} />
        <Drawer.Screen name="Extrato" component={extratoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;