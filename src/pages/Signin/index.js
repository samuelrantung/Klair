import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  // Alert,
  // Button,
  Image,
} from 'react-native';
import {
  ArrowBack,
  colors,
  FacebookLogo,
  fonts,
  GoogleLogo,
  MailLogo,
  PhoneLogo,
  PhoneRinging,
  SigninSignupBG,
  VerificationImage,
  WarningIcon,
} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, Gap} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import {
  useForm,
  OnFacebookSignin,
  OnGoogleSignin,
  OnPhoneSignin,
} from '../../functions';
import {useDispatch} from 'react-redux';
import {SET_LOADING} from '../../redux/counter/loadingSlice';
import CodeInput from 'react-native-confirmation-code-input';

const Signin = () => {
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [confirm, setConfirm] = useState(null); //Phone Auth
  const [code, setCode] = useState(''); //Phone Auth
  const [phoneForm, setPhoneForm] = useState(false); //Phone Auth
  const [phoneNumber, setPhoneNumber] = useState(''); //Phone Auth
  const [checkInput, setCheckInput] = useState(true); //Phone Auth
  const [confirmationForm, setConfirmationForm] = useState(false); //Phone Auth
  const dispatch = useDispatch();

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
    dispatch(SET_LOADING(false));
    setUser(receivedUser);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // if (initializing) {
  //   return null;
  // }

  const Signout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(err => {
        console.log('Error when sign out : ', err);
      });
  };

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  const Testing = () => {
    // const test = auth();
    // console.log('Testing button : ', test._user);
    return 'wkwkwkwk';
  };

  const CheckTextInput = () => {
    if (!phoneNumber.trim()) {
      return false;
    }
    return true;
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
        {/* <Button title="Confirm Code" onPress={() => confirmCode()} /> */}
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
          {phoneForm ? ( //Email and password form
            <View>
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
            </View>
          ) : (
            // Phone number form
            <View>
              {!checkInput && (
                <View style={styles.warningContainer}>
                  <Image source={WarningIcon} style={styles.warningIcon} />
                  <Text style={styles.warningText}>
                    Mohon mengisi nomor telepon anda
                  </Text>
                </View>
              )}
              <View style={styles.textInputPhoneContainer}>
                <Text style={styles.countryCode}>+62</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder="Nomor Telepon"
                  keyboardType="number-pad"
                  value={phoneNumber}
                  onChangeText={value => setPhoneNumber(value)}
                />
              </View>
              <Gap height={hp('4%')} />
            </View>
          )}

          <Gap height={hp('4%')} />
          {phoneForm ? ( //Button Signin Email
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                dispatch(SET_LOADING(true));
                OnSignin();
              }}>
              <Text style={styles.buttonLabel}>Sign In</Text>
            </TouchableOpacity>
          ) : (
            //Button Signin Phone Number
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={async () => {
                // OnPhoneSignin(phoneNumber);
                // dispatch(SET_LOADING(true));
                const check = await CheckTextInput();
                if (check) {
                  setCheckInput(check);
                  // const confirmation = await OnPhoneSignin(phoneNumber);
                  // setConfirm(confirmation);
                  setConfirmationForm(check);
                } else {
                  // dispatch(SET_LOADING(false));
                  setCheckInput(false);
                }
              }}>
              <Text style={styles.buttonLabel}>Sign In</Text>
            </TouchableOpacity>
          )}
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
              onPress={() => {
                dispatch(SET_LOADING(true));
                OnGoogleSignin();
              }}>
              <Image source={GoogleLogo} style={styles.providerButtonImage} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.providerButton}
              onPress={() => {
                dispatch(SET_LOADING(true));
                OnFacebookSignin();
              }}>
              <Image source={FacebookLogo} style={styles.providerButtonImage} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.providerButton}
              onPress={async () => {
                // dispatch(SET_LOADING(true));
                setPhoneForm(!phoneForm);
                // const confirmation = await OnPhoneSignin();
                // dispatch(SET_LOADING(false));
                // setConfirm(confirmation);
              }}>
              {phoneForm ? ( //Phone or email button
                <Image source={PhoneLogo} style={styles.providerButtonImage} />
              ) : (
                <Image source={MailLogo} style={styles.providerButtonImage} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {confirmationForm && (
        <View style={styles.confirmationFormWrapper}>
          <View style={styles.confirmationFormContainer}>
            <View style={styles.verificationImageContainer}>
              <Image
                source={VerificationImage}
                style={styles.verificationImage}
              />
            </View>
            <View style={styles.confirmationContentContainer}>
              <Gap height="5%" />
              <Text style={styles.confirmationContentTitle}>CONFIRMATION</Text>
              <Gap height="5%" />
              <View style={styles.confirmationContentTextContainer}>
                <Image source={PhoneRinging} />
                <Gap width={10} />
                <Text style={styles.confirmationContentText} numberOfLines={2}>
                  Please type the verification code sent to{' '}
                  <Text style={styles.confirmationContentTextPhoneNumber}>
                    +1 123 456 7777
                  </Text>
                </Text>
              </View>
              <View style={styles.codeInputWrapper}>
                <CodeInput
                  codeLength={6}
                  activeColor={colors.black}
                  // inactiveColor={colors.darkGrey}
                  autoFocus={false}
                  inputPosition="center"
                  size={35}
                  containerStyle={styles.codeInputContainer}
                  codeInputStyle={styles.codeInputStyle}
                />
              </View>
              <View style={styles.confirmationContentButtonContainer}>
                <Gap height={'20%'} />
                <Button
                  width={'50%'}
                  height={'25%'}
                  backgroundColor={colors.primaryGold}
                  borderRadius={30}
                  label="CONFIRM"
                />
                <Gap height={'15%'} />
                <Button
                  width={'50%'}
                  height={'25%'}
                  backgroundColor={colors.white}
                  borderRadius={30}
                  label="Cancel"
                  color={colors.darkGrey}
                />
              </View>
            </View>
          </View>
        </View>
      )}
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
    paddingHorizontal: 7,
  },
  warningContainer: {
    position: 'absolute',
    bottom: hp('10.5%'),
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  warningIcon: {
    width: wp('3.5%'),
    height: wp('3.5%'),
    marginRight: 8,
    top: 1,
  },
  warningText: {
    color: 'red',
    marginBottom: 8,
    fontFamily: fonts.robotoMedium,
    fontSize: 12,
  },
  textInputPhoneContainer: {
    backgroundColor: colors.light,
    borderRadius: 13,
    width: '100%',
    height: hp('6.5%'),
    paddingHorizontal: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
  },
  countryCode: {
    fontSize: 12,
    color: colors.darkGrey,
    marginHorizontal: 10,
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
  confirmationFormWrapper: {
    // backgroundColor: 'yellow',
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationFormContainer: {
    backgroundColor: colors.light,
    width: wp('85%'),
    height: wp('110%'),
    borderRadius: wp('4%'),
    elevation: 10,
  },
  verificationImageContainer: {
    // backgroundColor: 'yellow',
    height: '35%',
    borderTopLeftRadius: wp('4%'),
    borderTopRightRadius: wp('4%'),
    alignItems: 'center',
  },
  verificationImage: {
    flex: 1,
    borderTopLeftRadius: wp('4%'),
    borderTopRightRadius: wp('4%'),
    width: '100%',
    height: '100%',
  },
  confirmationContentContainer: {
    flex: 1,
    paddingHorizontal: wp('8%'),
  },
  confirmationContentTitle: {
    color: colors.primaryGold,
  },
  confirmationContentTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmationContentText: {
    fontSize: 11,
    // flex: 1,
    width: '60%',
    color: colors.darkGrey,
  },
  confirmationContentTextPhoneNumber: {
    color: colors.darkGrey,
    fontSize: 12,
  },
  codeInputWrapper: {
    height: '28%',
  },
  codeInputContainer: {
    borderWidth: 3,
    borderRadius: wp('2%'),
    borderColor: colors.primaryGold,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
  },
  codeInputStyle: {
    backgroundColor: colors.lightBlue,
  },
  confirmationContentButtonContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Signin;
