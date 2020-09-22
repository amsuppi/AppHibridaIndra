import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import PerfilStack from './PerfilStack';


const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} options={{title: "Home"}} />
        <Drawer.Screen name="Perfil" component={PerfilStack} options={{title: "Perfil"}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}