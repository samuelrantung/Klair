import auth from '@react-native-firebase/auth';

const OnPhoneSignin = async userNumber => {
  console.log('hehehe');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth()
      .signInWithPhoneNumber(phoneNumber)
      .catch(err => {
        console.log('error : ', err);
      });
    return confirmation;
  }

  const confirmation = await signInWithPhoneNumber(userNumber);
  // const confirmation = await signInWithPhoneNumber(`+1 650-555-1111`);
  //'+1 650-555-1111'
  console.log('end', confirmation);
  console.log('hadehh');
  return confirmation;
};

export default OnPhoneSignin;
