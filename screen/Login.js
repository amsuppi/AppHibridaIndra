import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';

const Login = ({navigation})=>{

    return(
        <View
            style={styles.container}
        >
           <Input
            placeholder='Usuario'
            />
           <Input
            placeholder='Contraseña'
            />
            <Button 
            title="Ingresar"
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