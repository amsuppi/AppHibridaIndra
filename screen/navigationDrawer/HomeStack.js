import * as React from 'react';
import {  View, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-elements'
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
        }}
        />
         
      </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

})

export default HomeStack;