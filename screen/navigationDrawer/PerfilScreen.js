import React, {useEffect, useState} from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import * as firebase from 'firebase';

import UserInfo from './../../components/UserInfo';

function PerfilScreen() {
  const [userInfo, setuserInfo]= useState('');

  useEffect(() => {
    
  var userId = firebase.auth().currentUser.uid;

    firebase.database().ref('/usuariosData/' + userId).once('value')
    .then(function(snapshot) {
      var username = (snapshot.val());
      setuserInfo(username)
    });
  }, [])

    return (
      <View style={styles.container}>
        <UserInfo title='Nombre' info={userInfo.nombre}/>
        <UserInfo title='Apellido' info={userInfo.apellido}/>
        <UserInfo title='Mail' info={userInfo.email}/>  
      </View>
    );
  }


const styles = StyleSheet.create({
    container:{
      flex:1,
      alignSelf: "center",
      textAlign: "center"
    }
})
  

export default PerfilScreen;