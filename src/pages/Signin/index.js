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
import {firebase} from '../../config/firebase.js';

const Signin = () => {
  const navigation = useNavigation();

  const OnSignin = () => {
    console.log('Sign in Pressed!');
    navigation.navigate('Dashboard');
  };

  const signinMethod = provider => {
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword('samuel@gmail.com', 'samuel')
    //   .then(success => {
    //     console.log('success login : ', success);
    //   })
    //   .catch(err => {
    //     console.log('error', err);
    //   });
  };
  return (
    <ImageBackground
      source={SigninSignupBG}
      style={styles.bg}
      imageStyle={styles.bgStyle}>
      <Gap height={hp('8%')} />
      <View style={styles.backButtonContainer}>
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
            <TextInput style={styles.textInput} placeholder="Alamat Email" />
          </View>
          <Gap height={hp('4%')} />
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              secureTextEntry={true}
              placeholder="Password"
            />
          </View>

          <Gap height={hp('4%')} />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={signinMethod}>
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
          <View style={styles.signinMethodContainer}>
            {/* <TouchableOpacity onPress={() => signinMethod(googleProvider)}>
              <Text>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => signinMethod(facebookProvider)}>
              <Text>Facebook</Text>
            </TouchableOpacity> */}
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
  signinMethodContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Signin;
