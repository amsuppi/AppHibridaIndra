import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const InputText = ()=>{
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
                title="Ingresar" />
               
            </View>
        )

}

const styles = StyleSheet.create({
    container:{
        marginRight: 20,
        marginLeft:20

    },
    input:{
        margin: 25
    }
})



export default InputText;