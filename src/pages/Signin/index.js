import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  // Alert,
  Button,
  Image,
} from 'react-native';
import {
  ArrowBack,
  colors,
  FacebookLogo,
  fonts,
  GoogleLogo,
  PhoneLogo,
  SigninSignupBG,
} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Gap} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {useForm, facebookSignin, googleSignin} from '../../functions';

// GoogleSignin.configure({
//   webClientId:
//     '1052356472372-tdtgn158sdqvpaqlahg1tt525gqcbk6i.apps.googleusercontent.com',
// });

//5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25

const Signin = () => {
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [confirm, setConfirm] = useState(null); //Phone Auth
  const [code, setCode] = useState(''); //Phone Auth

  const OnSignin = () => {
    // console.log('Sign in Pressed!');
    // navigation.navigate('Dashboard');
    auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(success => {
        console.log('Succesfully login : ', success);
      })
      .catch(err => {
        console.log('Error : ', err);
      });
  };

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(receivedUser) {
    setUser(receivedUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  const Signout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(err => {
        console.log('Error when sign out : ', err);
      });
  };

  // async function onGoogleButtonPress() {
  //   // Get the users ID token
  //   const {idToken} = await GoogleSignin.signIn();

  //   // Create a Google credential with the token
  //   // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   // return auth().signInWithCredential(googleCredential);
  //   return auth().signInWithCredential(googleCredential);
  // }

  // const googleSignin = () => {
  //   onGoogleButtonPress()
  //     .then(success => console.log('Succesfully Sign In : ', success))
  //     .catch(err => console.log('Error : ', err));
  // };

  // async function onFacebookButtonPress() {
  //   // Attempt login with permissions
  //   const result = await LoginManager.logInWithPermissions([
  //     'public_profile',
  //     'email',
  //   ]);

  //   if (result.isCancelled) {
  //     throw 'User cancelled the login process';
  //   }

  //   // Once signed in, get the users AccesToken
  //   const data = await AccessToken.getCurrentAccessToken();

  //   if (!data) {
  //     throw 'Something went wrong obtaining access token';
  //   }

  //   // Create a Firebase credential with the AccessToken
  //   const facebookCredential = auth.FacebookAuthProvider.credential(
  //     data.accessToken,
  //   );

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(facebookCredential);
  // }

  // const facebookSignin = () => {
  //   onFacebookButtonPress()
  //     .then(success => {
  //       console.log('Success login with facebook : ', success);
  //     })
  //     .catch(err => {
  //       console.log('Error login with facebook : ', err);
  //     });
  // };

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  const phoneSignin = () => {
    signInWithPhoneNumber('+1 650-555-1111');
  };

  const Testing = () => {
    const test = auth();
    console.log('Testing button : ', test._user);
  };
  return (
    <ImageBackground
      source={SigninSignupBG}
      style={styles.bg}
      imageStyle={styles.bgStyle}>
      <Gap height={hp('8%')} />
      <View style={styles.backButtonContainer}>
        {user ? <Text>Signed in : {user.email}</Text> : <Text>Signed out</Text>}
        {confirm ? (
          <TextInput value={code} onChangeText={text => setCode(text)} />
        ) : (
          <Text>Input Text Disabled</Text>
        )}
        <Button title="Confirm Code" onPress={() => confirmCode()} />
        {/* <Button title="Testing" onPress={Testing} /> */}

        <TouchableOpacity onPress={Signout}>
          <Text>Signout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <ArrowBack style={styles.arrowBackButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.insideContainer}>
          <Gap height={hp('5%')} />
          <View style={styles.titleContainer}>
            <Text style={styles.bigTitle}>Hello There!</Text>
            <Text style={styles.smallTitle}>Let's sign you in.</Text>
          </View>
          <Gap height={hp('8%')} />
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Alamat Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
          </View>
          <Gap height={hp('4%')} />
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
          </View>

          <Gap height={hp('4%')} />
          <TouchableOpacity style={styles.buttonContainer} onPress={OnSignin}>
            <Text style={styles.buttonLabel}>Sign In</Text>
          </TouchableOpacity>
          <Gap height={hp('2%')} />
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>Belum punya akun?</Text>
            <Gap width={5} />
            <TouchableOpacity
              style={styles.bottomTextButton}
              onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.bottomTextButtonText}>Daftar</Text>
            </TouchableOpacity>
          </View>
          <Gap height={hp('2%')} />
          <View style={styles.loginProvider}>
            <TouchableOpacity
              style={styles.providerButton}
              onPress={googleSignin}>
              <Image source={GoogleLogo} style={styles.providerButtonImage} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.providerButton}
              onPress={facebookSignin}>
              <Image source={FacebookLogo} style={styles.providerButtonImage} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.providerButton}
              onPress={phoneSignin}>
              <Image source={PhoneLogo} style={styles.providerButtonImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  bgStyles: {
    resizeMode: 'stretch',
  },
  backButtonContainer: {
    width: '100%',
  },
  backButton: {
    width: wp('22%'),
    height: wp('18%'),
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowBackButton: {
    right: 3,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: wp('15%'),
  },
  insideContainer: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'yellow',
  },
  bigTitle: {
    fontSize: 36,
    fontFamily: fonts.robotoMedium,
    color: colors.white,
  },
  smallTitle: {
    fontSize: 30,
    color: colors.white,
  },
  textInputContainer: {
    backgroundColor: colors.light,
    borderRadius: 13,
    width: '100%',
    height: hp('6.5%'),
    padding: 7,
  },
  buttonContainer: {
    backgroundColor: colors.lightBlue,
    borderRadius: 13,
    width: '100%',
    height: hp('6.5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.robotoMedium,
  },
  bottomTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomText: {
    color: colors.light,
  },
  bottomTextButtonText: {
    fontFamily: fonts.robotoMedium,
    color: colors.light,
  },
  loginProvider: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  providerButton: {
    height: wp('10%'),
    width: wp('10%'),
    // backgroundColor: 'blue',
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  providerButtonImage: {
    // flex: 1,
    width: '100%',
    height: '100%',
    // resizeMode: 'cover',
  },
});

export default Signin;
