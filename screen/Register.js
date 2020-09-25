import React,{useState, useRef, useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { firebaseApp } from '../firebase/firebase';
import * as firebase from 'firebase';
import { LogBox } from 'react-native';
import Toast from 'react-native-easy-toast'

function Register({navigation}) {
  const [formData, setFormData] = useState(defaultFormValue());
  const toastRef = useRef();

  const onChange = (e, type) => {
    setFormData({
        ...formData, [type]: e.nativeEvent.text
    })
}

useEffect(() => {
  LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
}, [])

  const onSubmit = ()=> {
    if(formData.nombre.length <= 0 
      || formData.apellido.length <= 0 
      || formData.edad.length <= 0 
      || formData.email.length <= 0 
      || formData.contrasena.length <= 0 ){

        toastRef.current.show("Todos los campos son obligatorios");

    }else if(formData.password < 4) {

        toastRef.current.show("La contraseña debe tener al menos 4 digitos");
    }else{
        firebase.auth()
        .createUserWithEmailAndPassword(formData.email, formData.contrasena)
        .then(() =>{
          var userId = firebase.auth().currentUser.uid;
          console.log(userId);

          firebase.database().ref('/usuariosData/' + userId).set(formData);
          navigation.navigate('Login')
        })
        .catch(()=> {
          toastRef.current.show("Error, vuelva a intentarlo")
        })
    }
}
    return (
      <View style={styles.contenedor}>
        <Image
            style={styles.imageLogo}
                source={require('../assets/reactNative.png')}
            />
        <Input placeholder="Nombre"
        onChange={(e)=> onChange(e, "nombre")}/>
        <Input placeholder="Apellido"
        onChange={(e)=> onChange(e, "apellido")}/>
        <Input placeholder="Edad"
        onChange={(e)=> onChange(e, "edad")}/>
        <Input placeholder="Email"
        onChange={(e)=> onChange(e, "email")}/>
        <Input placeholder="Contraseña"
        password= {true}
        secureTextEntry={true}
        onChange={(e)=> onChange(e, "contrasena")}/>

        <Button title="Registrarse"
        onPress={onSubmit}/>
        <Toast ref={toastRef} position="bottom" opacity={0.8}/>
      </View>
    );
  }

  function defaultFormValue(){
    return{
        nombre:"",
        apellido:"",
        edad:"",
        email:"",
        contrasena:"",

    }
}

const styles = StyleSheet.create({
  contenedor:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      marginLeft: 25,
      marginRight: 25 
    },
    imageLogo:{
      height:150, 
      width:150,
      alignSelf: "center",
      marginBottom: 25
  }
      

})

export default Register;


