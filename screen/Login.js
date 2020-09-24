import React,{useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { firebaseApp } from '../firebase/firebase';
import * as firebase from 'firebase';

const Login = ({navigation})=>{
    const [formData, setFormData] = useState(defaultFormValue());

    const onChange = (e, type) => {
        setFormData({
            ...formData, [type]: e.nativeEvent.text
        })
    }

    const onSubmit = ()=> {
        if(formData.email.length <= 0 || formData.password.length <= 0 ){
            console.log("Todos los campos son obligatorios");

        }else if (!formData.email){
            console.log("El usuario no existe"); 
        }else {
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(()=>{
                navigation.navigate('Drawer')
            }).catch(()=>{
                console.log("Error")
            })
        }
    }

    return(
        <View
            style={styles.container}
        >
           <Input
            placeholder='Usuario'
            onChange={(e)=> onChange(e, "email")}
            />
           <Input
            placeholder='Contraseña'
            password= {true}
            secureTextEntry={true}
            onChange={(e)=> onChange(e, "password")}
            />
            <Button 
            title="Ingresar"
            onPress={onSubmit}
            />
            <Button 
            title='Registrarse' 
            onPress={() => navigation.navigate('Register')}
            type="clear"
            />
           
        </View>
    )
}

function defaultFormValue(){
    return{
        email:"",
        password:"",

    }
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