import React,{useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { firebaseApp } from '../firebase/firebase';
import * as firebase from 'firebase';

function Register({navigation}) {
  const [formData, setFormData] = useState(defaultFormValue());

  const onChange = (e, type) => {
    setFormData({
        ...formData, [type]: e.nativeEvent.text
    })
}

  const onSubmit = ()=> {
    if(formData.nombre.length <= 0 
      || formData.apellido.length <= 0 
      || formData.edad.length <= 0 
      || formData.email.length <= 0 
      || formData.contrasena.length <= 0 ){

        console.log("Todos los campos son obligatorios");

    }else if(formData.password < 4) {

        console.log("La contraseña debe tener al menos 4 digitos");
    }else{
        firebase.auth()
        .createUserWithEmailAndPassword(formData.email, formData.contrasena)
        .then(() =>{
          var userId = firebase.auth().currentUser.uid;
          console.log(userId);

          firebase.database().ref('/usuariosData/' + userId).set(formData);
          navigation.navigate('Login')
        })
        .catch(err => {
          console.log(err)
        })
    }
}
    return (
      <View style={styles.contenedor}>
        <Input placeholder="Nombre"
        onChange={(e)=> onChange(e, "nombre")}/>
        <Input placeholder="Apellido"
        onChange={(e)=> onChange(e, "apellido")}/>
        <Input placeholder="Edad"
        onChange={(e)=> onChange(e, "edad")}/>
        <Input placeholder="Email"
        onChange={(e)=> onChange(e, "email")}/>
        <Input placeholder="Contraseña"
        onChange={(e)=> onChange(e, "contrasena")}/>

        <Button title="Aceptar"
        onPress={onSubmit}/>
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
    }
      

})

export default Register;


