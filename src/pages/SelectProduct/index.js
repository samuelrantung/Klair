import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {
  ArrowBack2,
  ArrowRight,
  colors,
  fonts,
  MinusIcon,
  PenjualanBg,
  PlusIcon,
  PlusIcon2,
  SearchIcon,
} from '../../assets';
import {Gap, Header} from '../../components';
import BottomSheet from 'reanimated-bottom-sheet';
import Barang from './Barang';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Product = () => {
  const [count, setCount] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  let fontFamily;
  let backgroundColor;
  return (
    <View
      style={styles.productCardContainer(
        (backgroundColor = toggleCheckBox
          ? colors.secondaryGold
          : colors.white),
      )}>
      <TouchableOpacity
        style={styles.checkBoxContainer}
        onPress={() => {
          setToggleCheckBox(!toggleCheckBox);
        }}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
      </TouchableOpacity>
      <Gap width={10} />
      <View style={styles.productInformationContainer}>
        <Text style={styles.productText()} numberOfLines={2}>
          Cuci motor full (cuci kolong + vacuum)mmmmmmmmmmmm
        </Text>
        <View style={styles.row}>
          <View>
            <Text
              style={styles.productText((fontFamily = fonts.poppinsMedium))}>
              Rp30.000
            </Text>
            <Text style={styles.productText()}>
              Stock:{' '}
              <Text
                style={styles.productText((fontFamily = fonts.poppinsMedium))}>
                5
              </Text>
              <Text style={styles.productText()}> pcs</Text>
            </Text>
          </View>
          <View>
            <View style={styles.plusMinusContainer}>
              <TouchableOpacity
                style={styles.minusIcon}
                onPress={() => {
                  if (toggleCheckBox) {
                    if (count > 0) {
                      setCount(count - 1);
                    }
                  }
                }}>
                <MinusIcon
                  preserveAspectRatio="xMinYMin slice"
                  height={25}
                  width={25}
                />
              </TouchableOpacity>
              <View style={styles.quantityInputContainer}>
                <TextInput
                  style={styles.quantityInput}
                  // placeholder={count}
                  value={count.toString()}
                  editable={toggleCheckBox}
                  textAlign="center"
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  if (toggleCheckBox) {
                    setCount(count + 1);
                  }
                }}>
                <PlusIcon
                  preserveAspectRatio="xMinYMin slice"
                  height={25}
                  width={25}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const SelectProduct = ({navigation}) => {
  const sheetRef = React.useRef(null);

  return (
    <View style={{minHeight: hp('100%')}}>
      <ScrollView>
        <ImageBackground source={PenjualanBg} style={styles.page}>
          <View style={styles.titleRow}>
            <TouchableOpacity
              style={styles.arrowBackButton}
              onPress={() => navigation.navigate('Penjualan')}>
              <ArrowBack2 />
            </TouchableOpacity>
            <Text style={styles.titleText}>PILIH PRODUK</Text>
            <TouchableOpacity
              style={styles.arrowBackButton}
              onPress={() => {
                sheetRef.current.snapTo(0);
              }}>
              <PlusIcon2 />
            </TouchableOpacity>
          </View>
          <Gap height={20} />
          <View style={styles.searchContainer}>
            <SearchIcon />
            <TextInput
              style={styles.searchTextInput}
              placeholder="Cari atau tambah produk"
            />
          </View>
          <Gap height={20} />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ImageBackground>
      </ScrollView>
      <View style={styles.totalButtonContainer}>
        <TouchableOpacity style={styles.totalButton}>
          <Text style={styles.totalButtonText}>Total 2 Produk</Text>
          <Text style={styles.totalButtonText}>Rp210.000</Text>
          <ArrowRight />
        </TouchableOpacity>
      </View>
      <Barang sheetRef={sheetRef} />
    </View>
  );
};

export default SelectProduct;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 20,
  },
  titleRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowBackButton: {
    width: 24,
    height: 24,
  },
  titleText: {
    fontSize: 18,
    fontFamily: fonts.poppinsBold,
    color: colors.white,
  },

  searchContainer: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  searchTextInput: {
    width: '90%',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  productCardContainer: backgroundColor => ({
    width: '100%',
    height: 115,
    backgroundColor: backgroundColor,
    elevation: 20,
    borderRadius: 7,
    paddingVertical: 15,
    // paddingHorizontal: 14,
    paddingRight: 15,
    flexDirection: 'row',
    marginBottom: 10,
  }),
  checkBoxContainer: {
    height: '100%',
    justifyContent: 'center',
    // paddingRight: 14,
    paddingHorizontal: 10,
    borderRightColor: colors.black,
    borderRightWidth: 1,
  },
  productInformationContainer: {
    // width: '100%',
    flex: 1,
  },
  productText: fontFamily => ({
    fontSize: 14,
    fontFamily: fontFamily ? fontFamily : fonts.poppins,
    paddingVertical: 0,
  }),
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flex: 1,
  },
  plusMinusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
    height: '100%',
  },
  quantityInputContainer: {
    paddingHorizontal: 3,
  },
  quantityInput: {
    // backgroundColor: 'red',
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: 1,
    fontSize: 12,
    height: 30,
    width: 30,
    paddingBottom: 5,
  },

  totalButtonContainer: {
    height: 80,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 30,
  },
  totalButton: {
    width: '100%',
    backgroundColor: colors.secondaryGold,
    height: 40,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 5,
  },
  totalButtonText: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.poppinsBold,
  },
});
