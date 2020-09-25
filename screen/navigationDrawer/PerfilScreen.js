import React, {useEffect, useState} from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { Avatar, Accessory, Icon  } from 'react-native-elements';
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
        <Avatar
          rounded
          size="large"
          overlayContainerStyle={{backgroundColor: '#d7ccc8'}}
          icon={{name: 'user', type: 'font-awesome'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{alignSelf:"center", marginTop: 100, marginBottom:50}}
/>

        <UserInfo title='Nombre:' info={userInfo.nombre}/>
        <UserInfo title='Apellido:' info={userInfo.apellido}/>
        <UserInfo title='Mail:' info={userInfo.email}/>  
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