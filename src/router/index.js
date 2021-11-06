import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Signin, Dashboard, Signup, Onboarding} from '../pages';
import Penjualan from '../pages/Penjualan';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Penjualan">
      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Penjualan"
        component={Penjualan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Router;
