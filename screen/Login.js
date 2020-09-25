import React,{useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LogBox } from 'react-native';
import { firebaseApp } from '../firebase/firebase';
import * as firebase from 'firebase';
import Toast from 'react-native-easy-toast'

const Login = ({navigation})=>{
    const [formData, setFormData] = useState(defaultFormValue());
    const toasRef = useRef();

    const onChange = (e, type) => {
        setFormData({
            ...formData, [type]: e.nativeEvent.text
        })
    }
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, [])

    const onSubmit = ()=> {
        if(formData.email.length <= 0 || formData.password.length <= 0 ){

            toasRef.current.show("Todos los campos son obligatorios")

        }else if (!formData.email || !formData.password){

            toasRef.current.show("Hay datos incorrectos"); 
        }else {
            firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(()=>{
                navigation.navigate('Drawer')
            }).catch(()=>{
                toasRef.current.show("Usuario y/o contraseña incorrectos"); 
            })
        }
    }

    return(
        <View
            style={styles.container}
        >
            <Image
            style={styles.imageLogo}
                source={require('../assets/reactNative.png')}
            />
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

            <Toast ref={toasRef} position="bottom" opacity={0.8} />
           
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
    },
    imageLogo:{
        height:150, 
        width:150,
        alignSelf: "center",
        marginBottom: 25
    }
})


export default Login;