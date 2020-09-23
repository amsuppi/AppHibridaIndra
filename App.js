import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerScreen from './screen/navigationDrawer/Drawer';
import { firebaseApp } from './firebase/firebase';
import * as firebase from 'firebase';

export default function App() {

  return (
    <>  
      <DrawerScreen />
    </>
  )
}
