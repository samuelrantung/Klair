import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInput} from 'react-native-gesture-handler';
import {
  BlueStar,
  colors,
  fonts,
  MinusIcon,
  PlusIcon,
  RedStar,
  YellowStar,
} from '../../assets';
import {Gap, Header} from '../../components';
import BottomSheet from 'reanimated-bottom-sheet';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
} from 'react-native-simple-radio-button';
import CurrencyInput from 'react-native-currency-input';

const Barang = ({sheetRef}) => {
  var radio_props = [
    {label: 'Barang', value: false},
    {label: 'Jasa', value: true},
  ];
  const [radioValue, setRadioValue] = useState('');
  const [stock, setStock] = useState(1);
  const [hargaJual, setHargaJual] = useState(0);
  const [hargaBeli, setHargaBeli] = useState(0);
  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={[630, 1, 0]}
      initialSnap={2}
      renderContent={() => {
        return (
          <View style={styles.container}>
            <View style={styles.dataInputContainer}>
              <View style={styles.productNameContainer}>
                <YellowStar />
                <Gap width={12} />
                <Text style={styles.title}>Nama Produk</Text>
              </View>
              <TextInput
                placeholder="Isi disini..."
                style={styles.dataInput}
                numberOfLines={2}
                multiline
                maxLength={50}
                blurOnSubmit={true}
              />
            </View>

            <Gap height={20} />

            <View style={styles.dataInputContainer}>
              <View style={styles.productNameContainer}>
                <RedStar />
                <Gap width={12} />
                <Text style={styles.title}>Kode Produk</Text>
                <View style={styles.subTitleContainer}>
                  <Text style={styles.title}>(Optional)</Text>
                </View>
              </View>
              <TextInput
                placeholder="Isi disini..."
                style={styles.dataInput}
                numberOfLines={2}
                multiline
                maxLength={50}
                blurOnSubmit={true}
              />
            </View>

            <Gap height={20} />

            <View style={styles.dataInputContainer}>
              <View style={styles.productNameContainer}>
                <BlueStar />
                <Gap width={12} />
                <Text style={styles.title}>Jenis Produk</Text>
              </View>
              <Gap height={20} />
              <RadioForm
                radio_props={radio_props}
                formHorizontal
                animation
                onPress={x => {
                  setRadioValue(x);
                  console.log('radio button : ', radioValue);
                }}
                buttonSize={10}
                labelStyle={styles.radioLabel}
              />
            </View>

            <Gap height={20} />
            {radioValue ? (
              <View>
                <View style={styles.priceTitleContainer}>
                  <Text style={styles.priceTitle}>Harga Jual</Text>
                </View>

                <Gap height={20} />

                <View style={styles.priceAmountContainer}>
                  <CurrencyInput
                    style={styles.priceAmount}
                    clearTextOnFocus={true}
                    prefix="Rp"
                    separator="."
                    value={hargaJual}
                    precision={0}
                    placeholder={'0'}
                    onChangeValue={setHargaJual}
                    selection={{start: 0, end: 0}}
                  />
                </View>
              </View>
            ) : (
              <View>
                <View style={styles.priceTitleContainer}>
                  <Text style={styles.priceTitle}>Harga Jual</Text>
                  <Text style={styles.priceTitle}>Harga Beli</Text>
                </View>

                <Gap height={20} />

                <View style={styles.priceAmountContainer}>
                  <CurrencyInput
                    style={styles.priceAmount}
                    clearTextOnFocus={true}
                    prefix="Rp"
                    separator="."
                    value={hargaJual}
                    precision={0}
                    placeholder={'0'}
                    onChangeValue={setHargaJual}
                    selection={{start: 0, end: 0}}
                  />
                  <CurrencyInput
                    style={styles.priceAmount}
                    clearTextOnFocus={true}
                    prefix="Rp"
                    separator="."
                    value={hargaBeli}
                    precision={0}
                    placeholder={'0'}
                    onChangeValue={setHargaBeli}
                    textAlign="right"
                  />
                </View>
              </View>
            )}

            <Gap height={40} />

            <View style={styles.stockContainer}>
              <Text style={styles.stockTitle}>Stok Barang</Text>
              <View style={styles.stockInputContainer}>
                <TouchableOpacity
                  onPress={() => {
                    if (stock > 0) {
                      setStock(stock - 1);
                    }
                  }}>
                  <MinusIcon
                    preserveAspectRatio="xMinYMin slice"
                    height={20}
                    width={20}
                  />
                </TouchableOpacity>
                <TextInput
                  value={stock.toString()}
                  onChangeText={setStock}
                  keyboardType="number-pad"
                  style={styles.stockInput}
                />
                <TouchableOpacity
                  onPress={() => {
                    setStock(stock + 1);
                  }}>
                  <PlusIcon
                    preserveAspectRatio="xMinYMin slice"
                    height={20}
                    width={20}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Gap height={10} />

            <TouchableOpacity style={styles.saveButton}>
              <Text style={styles.saveButtonLabel}>Simpan Produk</Text>
            </TouchableOpacity>
          </View>
        );
      }}
      renderHeader={Header}
      borderRadius={0}
      enabledInnerScrolling={false}
      callbackThreshold={0.001}
      enabledContentTapInteraction={false}
    />
  );
};

export default Barang;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height: 630,
    paddingHorizontal: 40,
  },
  dataInputContainer: {
    // backgroundColor: 'yellow',
    // height: '100%',
    // flex: 1,
  },
  productNameContainer: {
    flexDirection: 'row',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingVertical: 8,
    width: '100%',
  },
  title: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 14,
    color: colors.darkNavy,
  },
  radioLabel: {
    fontSize: 16,
    color: colors.darkNavy,
    fontFamily: fonts.poppins,
    marginRight: 20,
  },
  subTitleContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  jenisProdukDropdown: {
    backgroundColor: 'white',
    borderWidth: 0,
    width: 100,
  },
  jenisProdukDropdownContainerStyle: {
    backgroundColor: 'red',
    width: 100,
  },
  dataInput: {
    width: '100%',
    fontFamily: fonts.poppins,
  },

  priceTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  priceTitle: {
    color: colors.darkNavy,
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
  },
  priceAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceAmountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceAmount: {
    color: colors.darkNavy,
    fontFamily: fonts.poppinsBold,
    fontSize: 13,
    width: '45%',
    backgroundColor: colors.light,
    padding: 3,
    borderRadius: 7,
  },

  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stockTitle: {
    color: colors.darkNavy,
    fontSize: 14,
    fontFamily: fonts.poppinsMedium,
  },
  stockInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stockInput: {
    padding: 0,
    width: 40,
    textAlign: 'center',
    fontSize: 16,
    color: colors.darkNavy,
  },

  saveButton: {
    width: '100%',
    backgroundColor: colors.secondaryGold,
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 5,
  },
  saveButtonLabel: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.poppinsBold,
    textAlign: 'center',
  },
});
