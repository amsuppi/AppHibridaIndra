import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const UserInfo = ({title, info}) =>{
    return(
    <View>
        <Text> {title}</Text>
        <Text>{info}</Text>
    </View>
    )
}

export default UserInfo;