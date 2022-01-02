import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Signin,
  Dashboard,
  Signup,
  Onboarding,
  Penjualan,
  SelectProduct,
  SalesSummary,
  PersonalDashboard,
} from '../pages';
import PersonalBottomTab from './PersonalBottomTab';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="PersonalBottomTab">
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
      <Stack.Screen
        name="SelectProduct"
        component={SelectProduct}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SalesSummary"
        component={SalesSummary}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalDashboard"
        component={PersonalDashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PersonalBottomTab"
        component={PersonalBottomTab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Router;
