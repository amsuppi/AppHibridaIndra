import * as React from 'react';
import { Button, View, LogBox } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsDrawerOpen } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

function HomeStack({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
          title: "Home",
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

export default HomeStack;