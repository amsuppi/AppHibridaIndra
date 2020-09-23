import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerScreen from './screen/navigation/Drawer';
import Login from './screen/Login';
import { firebaseApp } from './firebase/firebase';
import * as firebase from 'firebase';

export default function App() {

  return (
    <>  
      <DrawerScreen />
    </>
  )
}
