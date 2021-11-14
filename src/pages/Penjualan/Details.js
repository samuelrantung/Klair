import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../assets';
import {Gap} from '../../components';

const Details = () => {
  var color = '';
  var fontFamily = '';
  return (
    <View style={styles.detailsContainer}>
      {/* <Gap height={20} />
      <Gap height={5} width={40} backgroundColor="grey" borderRadius={20} />
      <Gap height={20} /> */}
      <View style={styles.rowLineContainer}>
        <Text style={styles.detailsLabel((color = colors.black))}>
          Subtotal
        </Text>
        <Text style={styles.detailsLabel((color = colors.black))}>
          Rp220.000
        </Text>
      </View>
      <View style={styles.rowLineContainer}>
        <Text style={styles.detailsLabel((color = colors.darkGrey))} t>
          Biaya Tambahan
        </Text>
        <Text style={styles.detailsLabel((color = colors.darkGrey))}>
          Rp30.000
        </Text>
      </View>
      <View style={styles.rowLineContainer}>
        <Text style={styles.detailsLabel((color = colors.darkGrey))}>
          Potongan
        </Text>
        <Text style={styles.detailsLabel((color = colors.darkGrey))}>
          -Rp10.000
        </Text>
      </View>
      <Gap width={'100%'} height={1} backgroundColor={colors.darkGrey} />
      <Gap height={10} />
      <View style={styles.rowLineContainer}>
        <Text
          style={styles.detailsLabel(
            (color = colors.black),
            (fontFamily = fonts.poppinsBold),
          )}>
          Total
        </Text>
        <Text
          style={styles.detailsLabel(
            (color = colors.black),
            (fontFamily = fonts.poppinsBold),
          )}>
          Rp240.000
        </Text>
      </View>
      <View style={styles.payAmountContainer}>
        <TextInput
          placeholderTextColor="white"
          placeholder="Masukkan total bayar"
          style={styles.payAmountInput}
        />
        <Text style={styles.paymentStatusText}>Lunas</Text>
      </View>
      <Gap height={8} />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveLabel}>SIMPAN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: 'white',
    height: 500,
  },
  rowLineContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailsLabel: (color, fontFamily) => ({
    fontFamily: fontFamily,
    fontSize: 18,
    color: color,
  }),
  payAmountContainer: {
    flexDirection: 'row',
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: '100%',
  },
  payAmountInput: {
    paddingVertical: 0,
    fontFamily: fonts.poppins,
  },
  paymentStatusText: {
    color: 'white',
  },
  saveButtonContainer: {
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  saveButton: {
    backgroundColor: colors.primaryGold,
    width: 160,
    borderRadius: 20,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveLabel: {
    color: colors.white,
    fontFamily: fonts.poppins,
    fontSize: 14,
  },
});
