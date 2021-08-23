import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../assets';
import {Gap} from '../../../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const EmailAndPasswordForm = ({
  parentCallbackEmail,
  parentCallbackPassword,
  form,
}) => {
  return (
    <View>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Alamat Email"
          value={form.email}
          onChangeText={value => {
            parentCallbackEmail(value);
          }}
        />
      </View>
      <Gap height={hp('4%')} />
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Password"
          value={form.password}
          onChangeText={value => {
            parentCallbackPassword(value);
          }}
        />
      </View>
    </View>
  );
};

export default EmailAndPasswordForm;

const styles = StyleSheet.create({
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
});
