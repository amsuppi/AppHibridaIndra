import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const UserInfo = ({title, info}) =>{
    return(
    <View style={styles.container}>
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.info}>{info}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    
    title:{
        textAlign: "center",
        fontWeight: "bold",
        marginTop:20,
        fontSize:18
    },
    info:{
        textAlign: "center",
        fontSize:18
    }
})

export default UserInfo;