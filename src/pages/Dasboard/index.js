import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth';
import {useEffect} from 'react';

const Dashboard = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    firebase.auth().currentUser.providerData.forEach(userInfo => {
      setUser(userInfo);
    });
  }, []);

  // const subscriber = user.providerData.forEach(userInfo => {
  //   console.log('User info for provider: ', userInfo);
  // });
  console.log('subscriber', user);

  const Signout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(err => {
        console.log('Error when sign out : ', err);
      });
  };
  return (
    <View>
      <Text>Dashboard</Text>
      {/* <Text>Welcome, {user.email}</Text> */}
      <TouchableHighlight onPress={Signout}>
        <Text>Logout</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Dashboard;
