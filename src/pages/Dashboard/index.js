import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import auth from '@react-native-firebase/auth';
// import {firebase} from '@react-native-firebase/auth';
import {useEffect} from 'react';
import {clearData, getData} from '../../storage';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState();
  useEffect(() => {
    getData('user').then(res => setUser(res));
    console.log('subscriber', user);
  }, []);

  const Signout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        clearData();
        navigation.reset({
          index: 0,
          actions: navigation.navigate('Signin'),
        });
      })
      .catch(err => {
        console.log('Error when sign out : ', err);
      });
  };
  return (
    <View>
      <Text>Dashboard</Text>
      {user ? (
        <Text>
          Welcome,{' '}
          {user.providerData[0].email
            ? user.providerData[0].email
            : user.phoneNumber}
        </Text>
      ) : null}
      <TouchableHighlight onPress={Signout}>
        <Text>Logout</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={
          () => {
            console.log('user', user);
          }

          // () => {
          // return firestore().collection('users').doc(user.uid).update({
          //   phoneNumber: '082187792052',
          // });
          // console.log('uid: ', user.uid);
        }>
        <Text>Debug</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Penjualan');
        }}>
        <Text>Penjualan</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Dashboard;
