import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CodeInput from 'react-native-confirmation-code-input';
import {colors, fonts} from '../../../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CodeInputFalse = ({
  confirm,
  callbackCodeCheck,
  callbackConfirmationForm,
  confirmCode,
}) => {
  return (
    <View>
      <Text style={styles.warningText}>Code yang anda masukkan salah</Text>
      <CodeInput
        codeLength={6}
        activeColor={colors.black}
        autoFocus={false}
        inputPosition="center"
        size={35}
        containerStyle={styles.codeInputContainerFalse}
        codeInputStyle={styles.codeInputStyle}
        keyboardType="numeric"
        onFulfill={async res => {
          const status = await confirmCode(res);
          if (status) {
            callbackCodeCheck(true);
            callbackConfirmationForm(false);
          } else if (status === false) {
            callbackCodeCheck(false);
          }
        }}
      />
    </View>
  );
};

export default CodeInputFalse;

const styles = StyleSheet.create({
  warningText: {
    color: 'red',
    marginBottom: 8,
    fontFamily: fonts.robotoMedium,
    fontSize: 12,
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
});
