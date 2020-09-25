import * as React from 'react';
import { DrawerActions } from '@react-navigation/native';
import { Button, Icon } from 'react-native-elements'
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
            type="clear"
              icon={
                <Icon
                   name='three-bars'
                   type='octicon'
                   size={30}
                   color="black"
                   
                />
               }
            />
          ),
          headerStyle: {
            backgroundColor: '#039be5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
         />
      </Stack.Navigator>

  );
}

export default PerfilStack;