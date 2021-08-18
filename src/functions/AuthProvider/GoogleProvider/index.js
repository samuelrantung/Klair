// import React from 'react'
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '1052356472372-tdtgn158sdqvpaqlahg1tt525gqcbk6i.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  // return auth().signInWithCredential(googleCredential);
  return auth().signInWithCredential(googleCredential);
}

const googleSignin = () => {
  onGoogleButtonPress()
    .then(success => console.log('Succesfully Sign In : ', success))
    .catch(err => console.log('Error : ', err));
};

export default googleSignin;
