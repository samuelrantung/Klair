import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ArrowBack, colors, fonts, SigninSignupBG} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Gap} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {useForm} from '../../functions/useForm';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '1052356472372-tdtgn158sdqvpaqlahg1tt525gqcbk6i.apps.googleusercontent.com',
});

//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//37:9B:D6:79:47:B6:25:B5:03:F2:4F:A0:9C:E0:24:94:3E:83:41:E7
//5E:8F:16:06:2E:A3:CD:2C:4A:0D:54:78:76:BA:A6:F3:8C:AB:F6:25

const Signin = () => {
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

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
  function onAuthStateChanged(user) {
    setUser(user);
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

  return (
    <ImageBackground
      source={SigninSignupBG}
      style={styles.bg}
      imageStyle={styles.bgStyle}>
      <Gap height={hp('8%')} />
      <View style={styles.backButtonContainer}>
        {user ? <Text>Signed in : {user.email}</Text> : <Text>Signed out</Text>}
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
          <View>
            <TouchableOpacity onPress={googleSignin}>
              <Text>Google</Text>
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
});

export default Signin;
