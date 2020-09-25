import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { firebaseApp } from './firebase/firebase';
import * as firebase from 'firebase';
import NavigationScreen from './screen/navigationScreens';

export default function App() {

  return (
      <NavigationScreen />
  )
}
