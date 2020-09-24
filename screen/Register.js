import * as React from 'react';
import { View } from 'react-native';
import { UserInfo } from './../components/Input';

function Register() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <UserInfo />
        
      </View>
    );
  }

export default Register;


