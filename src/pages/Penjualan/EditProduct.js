import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {colors, EditIcon, fonts} from '../../assets';
import {Gap} from '../../components';
import LinearGradient from 'react-native-linear-gradient';

const EditHeader = () => {
  return (
    <View style={styles.header}>
      {/* <Gap height={5} width={40} backgroundColor="grey" borderRadius={20} /> */}
      {/* <LinearGradient
        // start={{x: 0.0, y: 0.25}}
        // end={{x: 0.5, y: 1.0}}
        useAngle={true}
        angle={120}
        angleCenter={{x: 0.25, y: 0.25}}
        locations={[0, 1]}
        colors={['#FFA45B', '#ffffff']}
        style={styles.headerTextContainerBorder}> */}
      <View style={styles.headerTextContainerBorder}>
        <Text style={styles.titleText}>
          Edit <Text style={styles.titleSubText}> Detail Produk</Text>
        </Text>
      </View>
      {/* </LinearGradient> */}
    </View>
  );
};

export {EditHeader};
const EditProduct = () => {
  var fontFamily = '';
  return (
    <View style={styles.container}>
      <View style={styles.productDetailsContainer}>
        <View style={styles.productTitleContainer}>
          <TextInput
            scrollEnabled={false}
            clearTextOnFocus
            placeholder="Judul Produk"
            placeholderTextColor="black"
            multiline
            maxLength={50}
            // numberOfLines={1}
            blurOnSubmit={true}
            style={styles.productTitle}
          />
          <EditIcon
            style={styles.editIcon}
            preserveAspectRatio="xMinYMin slice"
            width={20}
            height={20}
          />
        </View>
        <View style={styles.productDescriptionContainer}>
          <TextInput
            multiline
            placeholder="Deskripsikan produk..."
            blurOnSubmit={true}
            style={styles.productDescriptionTextInput}
          />
          <EditIcon style={styles.textInputEditIcon} />
        </View>

        <Gap height={32} />

        <View style={styles.priceRow}>
          <View style={styles.priceContainer}>
            <View style={styles.priceTitleRow}>
              <Text style={styles.priceTitle}>
                Harga <Text style={styles.priceTitleBold}>Jual</Text>
              </Text>
              <EditIcon style={styles.priceEditIcon} />
            </View>
            <View style={styles.priceTextInputContainer}>
              <Text style={styles.currencyText}>Rp</Text>
              <TextInput style={styles.priceTextInput} placeholder="30.000" />
            </View>
          </View>
          <View style={styles.priceContainer}>
            <View style={styles.priceTitleRow}>
              <Text style={styles.priceTitle}>
                Harga <Text style={styles.priceTitleBold}>Modal</Text>
              </Text>
              <EditIcon style={styles.priceEditIcon} />
            </View>
            <View style={styles.priceTextInputContainer}>
              <Text style={styles.currencyText}>Rp</Text>
              <TextInput style={styles.priceTextInput} placeholder="30.000" />
            </View>
          </View>
        </View>

        <Gap height={65} />

        <View style={styles.saveContainer}>
          <Text style={styles.saveTitle}>SIMPAN PERUBAHAN</Text>
          <Gap height={10} />
          <View style={styles.saveButtonRow}>
            <TouchableOpacity style={styles.saveButtonContainer}>
              <Text
                style={styles.saveButtonTitle(
                  (fontFamily = fonts.poppinsBold),
                )}>
                Semua{' '}
                <Text
                  style={styles.saveButtonTitle(
                    (fontFamily = fonts.poppinsLight),
                  )}>
                  Transaksi Berikutnya
                </Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.saveButtonContainer}>
              <Text
                style={styles.saveButtonTitle(
                  (fontFamily = fonts.poppinsBold),
                )}>
                Hanya{' '}
                <Text
                  style={styles.saveButtonTitle(
                    (fontFamily = fonts.poppinsLight),
                  )}>
                  Transaksi Ini
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EditProduct;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: colors.white,
    // alignItems: 'center',
    // paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  headerTextContainerBorder: {
    backgroundColor: colors.primaryGold,
    width: '45%',
    height: 50,
    // flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    left: 25,
    top: -15,
    elevation: 10,
  },
  headerTextContainer: {
    width: '95%',
    height: 38,
    backgroundColor: colors.primaryGold,
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // left: 20,
    // top: -20,
  },
  titleText: {
    fontSize: 16,
    fontFamily: fonts.poppinsMedium,
    color: colors.white,
  },
  titleSubText: {
    fontSize: 16,
    fontFamily: fonts.poppinsLight,
    color: colors.white,
  },

  container: {
    height: 500,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  productDetailsContainer: {
    // backgroundColor: 'yellow',
    flex: 1,
  },
  productTitleContainer: {
    flexDirection: 'row',
    // backgroundColor: 'yellow',
    width: '100%',
    alignItems: 'flex-end',
  },
  productTitle: {
    fontSize: 20,
    fontFamily: fonts.poppinsBold,
    // width: '45%',
    maxWidth: '85%',
    minWidth: '45%',
    // height: 50,
    paddingVertical: 0,
  },
  productDescriptionContainer: {
    width: '100%',
    height: '20%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.lightBlue,
  },
  productDescriptionTextInput: {
    paddingVertical: 0,
  },
  textInputEditIcon: {
    color: colors.lightBlue,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceContainer: {
    width: 160,
    height: 75,
    backgroundColor: colors.secondaryGold,
    borderRadius: 8,
    elevation: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  priceTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceTitle: {
    fontFamily: fonts.poppins,
    fontSize: 14,
    color: colors.darkGrey,
  },
  priceTitleBold: {
    fontFamily: fonts.poppinsBold,
    fontSize: 14,
    color: colors.darkGrey,
  },
  priceEditIcon: {
    color: colors.primaryGold,
  },
  priceTextInputContainer: {
    backgroundColor: colors.white,
    height: 21,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  currencyText: {
    fontFamily: fonts.poppins,
    fontSize: 12,
    color: colors.lightGrey,
  },
  priceTextInput: {
    color: colors.darkGrey,
    paddingVertical: 0,
    textAlign: 'right',
  },

  saveContainer: {
    width: '100%',
    alignItems: 'center',
  },
  saveTitle: {
    fontFamily: fonts.poppinsBold,
    fontSize: 18,
    color: colors.davysGrey,
  },
  saveButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  saveButtonContainer: {
    width: 140,
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: colors.secondaryGold,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // saveButtonBoldTitle: {
  //   fontSize: 12,
  //   fontFamily: fonts.poppinsBold,
  //   color: colors.white,
  //   textAlign: 'center',
  // },
  saveButtonTitle: fontFamily => ({
    fontSize: 12,
    fontFamily: fontFamily,
    color: colors.white,
    textAlign: 'center',
  }),

  editIcon: {
    color: colors.primaryGold,
    bottom: 10,
  },
});
