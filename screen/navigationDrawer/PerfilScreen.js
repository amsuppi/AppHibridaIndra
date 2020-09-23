import React, {useEffect} from 'react';
import { Button, View, Text } from 'react-native';
import * as firebase from 'firebase';

import UserInfo from './../../components/UserInfo';

function PerfilScreen() {
/*  const userData = ()=> {
    var holis = "chau"

    firebase.database().ref().child(userId).child('nombre').once("value", 
    function(data){
      holis = data
    } )
  }*/

  useEffect(() => {
    
  var userId = firebase.auth().currentUser.uid;

    firebase.database().ref('/usuariosData/' + userId).once('value')
    .then(function(snapshot) {
      var username = (snapshot.val() ) || 'Anonymous';
      console.log(username)
    });
  }, [])

    return (
      <View>
        <UserInfo title='Nombre' info='Amalia Maribel'/>
        <UserInfo title='Apellido' info='Suppi'/>
        <UserInfo title='Mail' info='maribelsuppi@gmail.com'/>  
        <Text>
          Hello
        </Text>

      </View>
    );
  }
  

export default PerfilScreen;