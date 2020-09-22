import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PerfilScreen from './PerfilScreen';

const Stack = createStackNavigator();

function PerfilStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={PerfilScreen} options={{title: "Perfil"}} />
      </Stack.Navigator>

  );
}

export default PerfilStack;