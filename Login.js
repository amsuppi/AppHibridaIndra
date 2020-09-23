import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as firebase from 'firebase';

const Login = ({navigation})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [login, setLogin] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
          console.log(user);
        })
      }, [])

    return(
        <View
            style={styles.container}
        >
           <Input
            placeholder='Usuario'
            value= {username}
            onChangeText= {setUsername}
            />
           <Input
            placeholder='Contraseña'
            value= {password}
            onChangeText= {setPassword}
            />
            <Button 
            title="Ingresar"
            onPress={() => navigation.navigate('Home')}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        justifyContent: "center",
        padding: 25,
        

    },
    input:{
        margin: 25
    }
})


export default Login;