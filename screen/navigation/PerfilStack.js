import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import PerfilScreen from './PerfilScreen';

const Stack = createStackNavigator();

function PerfilStack({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="perfil" component={PerfilScreen} 
        options={{
          title: "Perfil",
          headerLeft: () => (
            <Button
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              title="Info"
              color="red"
            />
          ),
        }}
         />
      </Stack.Navigator>

  );
}

export default PerfilStack;