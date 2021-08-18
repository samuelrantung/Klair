import auth from '@react-native-firebase/auth';

const OnPhoneSignin = async () => {
  console.log('hehehe');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    console.log(';lkajsdfljksdfoiuweroiweu', confirmation);
    return confirmation;
  }

  const confirmation = await signInWithPhoneNumber('+1 650-555-1111');

  console.log('end', confirmation);
  return confirmation;
};

export default OnPhoneSignin;
