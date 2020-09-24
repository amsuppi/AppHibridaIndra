import * as React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Input, Button } from 'react-native-elements';


function InputRegister() {
    return (
        <View>
        <Input placeholder="Nombre"/>
        <Input placeholder="Apellido"/>
        <Input placeholder="Edad"/>
        <Input placeholder="Email"/>
        <Input placeholder="Contraseña"/>

        <Button title="Aceptar"/>
      </View>
    );
  }



export default InputRegister;