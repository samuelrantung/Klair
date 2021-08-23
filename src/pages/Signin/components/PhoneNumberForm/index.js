import React from 'react';
import {useState} from 'react';
import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import {colors, fonts, WarningIcon} from '../../../../assets';
import {Gap} from '../../../../components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PhoneNumberForm = ({checkInput, parentPhoneNumber, parentCallback}) => {
  const [phoneNumber, setPhoneNumber] = useState(parentPhoneNumber);
  // parentCallback(phoneNumber);
  return (
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
          onChangeText={value => {
            setPhoneNumber(value);
            parentCallback(value);
          }}
        />
      </View>
      <Gap height={hp('4%')} />
    </View>
  );
};

export default PhoneNumberForm;

const styles = StyleSheet.create({
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
  countryCode: {
    fontSize: 12,
    color: colors.darkGrey,
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
  },
});
