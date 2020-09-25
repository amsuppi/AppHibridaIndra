import * as React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import PerfilStack from './PerfilStack';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (

      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} options={{title: "Home"}} />
        <Drawer.Screen name="Perfil" component={PerfilStack} options={{title: "Perfil"}} />
      </Drawer.Navigator>


  );
}

