import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DrawerScreen from './screen/navigation/Drawer';
import Login from './screen/Login';
import { firebaseApp } from './firebase/firebase';
import * as firebase from 'firebase';

export default function App() {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) =>{
      console.log(user);
    })
  }, [])

  return (
    <>
      <DrawerScreen />
    </>
  )
}
