import * as React from 'react';
import { Button, View, Text } from 'react-native';

import UserInfo from './../../components/UserInfo';

function PerfilScreen() {
    return (
      <View>
        <UserInfo title='Nombre' info='Amalia Maribel'/>
        <UserInfo title='Apellido' info='Suppi'/>
        <UserInfo title='Mail' info='maribelsuppi@gmail.com'/>
      </View>
    );
  }
  

export default PerfilScreen;