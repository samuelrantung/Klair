import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
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
import {
  PhoneNumberForm,
  EmailAndPasswordForm,
  CodeInputFalse,
} from './components';
import {storeData} from '../../storage';
import firestore from '@react-native-firebase/firestore';

const Signin = () => {
  const navigation = useNavigation();
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [confirm, setConfirm] = useState(null); //Phone Auth
  const [phoneForm, setPhoneForm] = useState(false); //Phone Auth
  const [phoneNumber, setPhoneNumber] = useState(''); //Phone Auth
  const [checkInput, setCheckInput] = useState(true); //Phone Auth
  const [confirmationForm, setConfirmationForm] = useState(false); //Phone Auth
  const [codeCheck, setCodeCheck] = useState(true); //Phone Auth
  const dispatch = useDispatch();

  const OnSignin = () => {
    if (form.email && form.password) {
      auth()
        .signInWithEmailAndPassword(form.email, form.password)
        .then(success => {
          console.log('Succesfully login : ', success);
          navigation.navigate('Dashboard');
          dispatch(SET_LOADING(false));
        })
        .catch(err => {
          dispatch(SET_LOADING(false));
          console.log('Error : ', err);
        });
    } else {
      dispatch(SET_LOADING(false));
      console.log('email atau password kosong');
    }
  };

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function notGmailSignin(receivedUser) {
    return firestore()
      .collection('users')
      .doc(receivedUser._user.uid)
      .set({
        email: receivedUser._user.email,
        phoneNumber: receivedUser._user.phoneNumber,
        name: receivedUser._user.displayName,
        photoURL: receivedUser._user.photoURL,
      })
      .then(() => {
        storeData('user', receivedUser);
        navigation.reset({
          index: 0,
          actions: navigation.navigate('Dashboard'),
        });
        if (receivedUser !== null) {
        }
        dispatch(SET_LOADING(false));
        setUser(receivedUser);
        if (initializing) {
          setInitializing(false);
        }
        // console.log("user doesn't exists");
      });
  }

  function gmailSignin(receivedUser) {
    return firestore()
      .collection('users')
      .doc(receivedUser._user.uid)
      .set({
        email: receivedUser._user.providerData[0].email,
        phoneNumber: receivedUser._user.phoneNumber,
        name: receivedUser._user.displayName,
        photoURL: receivedUser._user.photoURL,
      })
      .then(() => {
        storeData('user', receivedUser);
        navigation.reset({
          index: 0,
          actions: navigation.navigate('Dashboard'),
        });
        // if (receivedUser !== null) {
        // }
        dispatch(SET_LOADING(false));
        setUser(receivedUser);
        if (initializing) {
          setInitializing(false);
        }
      });
  }
  // Handle user state changes
  function onAuthStateChanged(receivedUser) {
    if (receivedUser) {
      console.log('start');
      firestore()
        .collection('users')
        .doc(receivedUser._user.uid)
        .get()
        .then(res => {
          if (res.exists) {
            dispatch(SET_LOADING(false));
            console.log('received : ', receivedUser);
            setUser(receivedUser);
            storeData('user', receivedUser);
            navigation.navigate('Dashboard');
            // navigation.reset({
            //   index: 0,
            //   actions: navigation.navigate('Dashboard'),
            // });
            console.log('user exists', receivedUser);
            // if(receivedUser.email){

            // }
          } else {
            //user first time login
            console.log('hehehe');
            if (receivedUser.email) {
              notGmailSignin(receivedUser);
            } else if (receivedUser.email === null) {
              gmailSignin(receivedUser);
            }
            console.log("user doesn't exists");
          }
        })
        .catch(e => {
          console.log('Error : ', e);
        });
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  async function confirmCode(codes) {
    try {
      await confirm.confirm(codes);
      return true;
    } catch (error) {
      console.log('Invalid code.');
      return false;
    }
  }

  const Signout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
      .catch(err => {
        console.log('Error when sign out : ', err);
      });
  };

  const CheckTextInput = () => {
    if (!phoneNumber.trim()) {
      return false;
    }
    return true;
  };

  const EmailFormCallback = data => {
    setForm('email', data);
  };
  const PasswordFormCallback = data => {
    setForm('password', data);
  };
  const PhoneNumberFormCallback = data => {
    setPhoneNumber(data);
  };
  const CodeCheckCallback = data => {
    setCodeCheck(data);
  };
  const ConfirmationFormCallback = data => {
    setConfirmationForm(data);
  };
  return (
    <ImageBackground
      source={SigninSignupBG}
      style={styles.bg}
      imageStyle={styles.bgStyle}>
      <Gap height={hp('8%')} />
      <View style={styles.backButtonContainer}>
        {user ? <Text>Signed in : {user.email}</Text> : <Text>Signed out</Text>}
        {/* debugging */}

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
          {phoneForm ? ( //Phone number form
            <PhoneNumberForm
              checkInput={checkInput}
              phoneNumber={phoneNumber}
              parentCallback={PhoneNumberFormCallback}
            />
          ) : (
            //Email and password form
            <EmailAndPasswordForm
              parentCallbackEmail={EmailFormCallback}
              parentCallbackPassword={PasswordFormCallback}
              form={form}
            />
          )}

          <Gap height={hp('4%')} />
          {phoneForm ? (
            //Button Signin Phone Number
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={async () => {
                const check = await CheckTextInput();
                if (check) {
                  setCheckInput(true);
                  dispatch(SET_LOADING(true));
                  const confirmation = await OnPhoneSignin(`+1 ${phoneNumber}`);
                  setConfirmationForm(true);

                  dispatch(SET_LOADING(false));
                  setConfirm(confirmation);
                } else {
                  setCheckInput(false);
                }
              }}>
              <Text style={styles.buttonLabel}>Sign In</Text>
            </TouchableOpacity>
          ) : (
            //Button Signin Email
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => {
                dispatch(SET_LOADING(true));
                OnSignin();
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
                setPhoneForm(!phoneForm);
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
                    +62 {phoneNumber}
                  </Text>
                </Text>
              </View>
              <View style={styles.codeInputWrapper}>
                {codeCheck ? (
                  <View>
                    <Text style={styles.warningText} />
                    <CodeInput
                      codeLength={6}
                      activeColor={colors.black}
                      autoFocus={false}
                      inputPosition="center"
                      size={35}
                      containerStyle={styles.codeInputContainer}
                      codeInputStyle={styles.codeInputStyle}
                      keyboardType="number-pad"
                      onFulfill={async res => {
                        const status = await confirmCode(res);
                        console.log('check status returned', status);
                        if (status) {
                          console.log('status is true');
                          setCodeCheck(true);
                          setConfirmationForm(false);
                        } else if (status === false) {
                          console.log('status is false');
                          setCodeCheck(false);
                        }
                      }}
                    />
                  </View>
                ) : (
                  <CodeInputFalse
                    confirm={confirm}
                    callbackCodeCheck={CodeCheckCallback}
                    callbackConfirmationForm={ConfirmationFormCallback}
                    confirmCode={confirmCode}
                  />
                )}
              </View>
              <View style={styles.confirmationContentButtonContainer}>
                <Gap height={'20%'} />
                <Button
                  width={'50%'}
                  height={'25%'}
                  backgroundColor={colors.primaryGold}
                  borderRadius={30}
                  label="CONFIRM"
                  onPress={() => {
                    setCodeCheck(false);
                  }}
                />
                <Gap height={'15%'} />
                <Button
                  width={'50%'}
                  height={'25%'}
                  backgroundColor={colors.white}
                  borderRadius={30}
                  label="Cancel"
                  color={colors.darkGrey}
                  onPress={() => {
                    setConfirmationForm(false);
                  }}
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
    padding: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    bottom: 20,
  },
  codeInputContainerFalse: {
    borderWidth: 3,
    borderRadius: wp('2%'),
    borderColor: 'red',
    padding: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20%',
    bottom: 20,
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
