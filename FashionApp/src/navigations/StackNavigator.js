import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp, Categories, List, Filter, Details, Cart } from '../screens';
import AppDrawer from './DrawerNavigator';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={AppDrawer} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;