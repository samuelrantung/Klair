import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '1052356472372-tdtgn158sdqvpaqlahg1tt525gqcbk6i.apps.googleusercontent.com',
});
//5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25

const OnGoogleSignin = () => {
  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
    return auth().signInWithCredential(googleCredential);
  };

  const googleOnPress = () => {
    onGoogleButtonPress()
      .then(success => {
        console.log('Succesfully Sign In : ', success);
      })
      .catch(err => {
        console.log('Error : ', err);
      });
  };
  googleOnPress();
  console.log('end');
  return true;
};

export default OnGoogleSignin;
