import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {TextInput} from 'react-native-gesture-handler';
import {BlueStar, colors, fonts, RedStar, YellowStar} from '../../assets';
import {Gap, Header} from '../../components';
import BottomSheet from 'reanimated-bottom-sheet';

const Barang = ({sheetRef}) => {
  const [openJenisProduk, setOpenJenisProduk] = useState(false);
  const [jenisProduk, setJenisProduk] = useState('');
  const [pilihanJenisProduk, setPilihanJenisProduk] = useState([
    {label: 'Barang', value: 'Barang'},
    {label: 'Jasa', value: 'Jasa'},
  ]);
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
            <View style={styles.dataInputContainer}>
              <View style={styles.productNameContainer}>
                <BlueStar />
                <Gap width={12} />
                <Text style={styles.title}>Jenis Produk</Text>
                <View style={styles.subTitleDropdownContainer}>
                  <DropDownPicker
                    open={openJenisProduk}
                    value={jenisProduk}
                    items={pilihanJenisProduk}
                    setOpen={setOpenJenisProduk}
                    setValue={setJenisProduk}
                    setItems={setPilihanJenisProduk}
                    style={styles.jenisProdukDropdown}
                    placeholder={`${jenisProduk}`}
                    dropDownContainerStyle={
                      styles.jenisProdukDropdownContainerStyle
                    }
                  />
                </View>
              </View>
              {/* <TextInput
                placeholder="Anda memilih jenis produk BARANG"
                style={styles.dataInput}
                numberOfLines={2}
                multiline
                maxLength={50}
                blurOnSubmit={true}
              /> */}
            </View>
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
  subTitleContainer: {
    flex: 1,
    // alignItems: 'flex-end',
    flexDirection: 'row-reverse',
    backgroundColor: 'yellow',
  },
  subTitleDropdownContainer: {
    backgroundColor: 'blue',
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
  },
  jenisProdukDropdown: {
    backgroundColor: 'white',
    borderWidth: 0,
    // padding: 0,
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
});
