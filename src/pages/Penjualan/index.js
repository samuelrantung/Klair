import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {SwipeablePanel} from 'rn-swipeable-panel';
import {
  ArrowBack2,
  Calendar,
  colors,
  EditIcon,
  fonts,
  MinusIcon,
  PenjualanBg,
  PlusIcon,
  TrashIcon,
  UserIcon,
  UserIcon2,
} from '../../assets';
import {Gap} from '../../components';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const Product = () => {
  return (
    <View style={{width: '100%'}}>
      <View style={styles.productCardContainer}>
        <TouchableOpacity>
          <TrashIcon />
        </TouchableOpacity>
        <Gap width={9} />
        <Gap height={30} width={2} backgroundColor="white" />
        <Gap width={9} />
        <View style={styles.productTitleContainer}>
          <Text style={styles.productText}>
            Cuci motor full (cuci kolong + vacuum)
          </Text>
          <Text style={styles.productText}>Rp30.000</Text>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity>
            <EditIcon />
          </TouchableOpacity>
          <View style={styles.plusMinusContainer}>
            <TouchableOpacity
              style={styles.minusIcon}
              onPress={() => {
                console.log('wkwkwk');
              }}>
              <MinusIcon />
            </TouchableOpacity>
            <View style={styles.quantityInputContainer}>
              <TextInput
                style={styles.quantityInput}
                placeholder="0"
                textAlign="center"
              />
            </View>
            <TouchableOpacity>
              <PlusIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const Penjualan = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openSmall: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
  console.log('date: ', date);
  return (
    <>
      <ImageBackground style={styles.background} source={PenjualanBg}>
        <ScrollView style={styles.container}>
          <Text style={styles.title}>PENJUALAN</Text>
          <Gap height={11} />

          <View style={styles.topButtonContainer}>
            <TouchableOpacity>
              <ArrowBack2 />
            </TouchableOpacity>
            <Text style={styles.dateText}>
              {moment(date).format('D MMMM yyyy')}
            </Text>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Calendar />
            </TouchableOpacity>
          </View>
          <Gap height={24} />
          <View>
            <View style={styles.userAccountContainer}>
              <UserIcon />
              <View style={styles.userAccountDropdownContainer}>
                <Text style={styles.userAccountDropdown}>Chandra Mangare</Text>
              </View>
            </View>
            <Gap height={12} />
            <View style={styles.userAccountContainer}>
              <View style={styles.customerTypeContainer}>
                <View style={styles.customerTypeContainerLeft}>
                  <UserIcon2 />
                </View>
                <View style={styles.customerTypeContainerRight}>
                  <Text>Customer</Text>
                </View>
              </View>
              <View style={styles.customerNameContainer}>
                <Text style={styles.customerNameText}>Chandra Mangare</Text>
              </View>
            </View>
            <Gap height={28} />
            <Gap height={48} />

            <View style={styles.itemWrapper}>
              <View style={styles.itemContainer}>
                <Text style={styles.detailText}>
                  Detail <Text style={styles.produkText}>Produk</Text>
                </Text>
              </View>
              <Product />
              <Product />
              <TouchableOpacity style={styles.addProductButton}>
                <Text style={styles.addProductText}>+ Tambahkan Produk</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Gap height={250} />
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </ScrollView>
        {/* <TouchableOpacity
          onPress={() => {
            openPanel();
          }}>
          <Text>open and close</Text>
        </TouchableOpacity>
        {isPanelActive ? (
          <View></View>
        ) : (
          <TouchableOpacity
            style={styles.panelOpenContainer}
            onPress={() => setIsPanelActive(true)}>
            <Gap height={10} />
            <Gap width={40} height={4} backgroundColor={colors.darkGrey} />
          </TouchableOpacity>
        )} */}
      </ImageBackground>
      <SwipeablePanel
        {...panelProps}
        isActive={isPanelActive}
        showCloseButton={false}
        smallPanelHeight={370}
        noBackgroundOpacity>
        <Details />
      </SwipeablePanel>
      <TouchableOpacity
        style={styles.panelOpenContainer}
        onPress={() => setIsPanelActive(true)}>
        <Gap height={10} />
        <Gap width={40} height={4} backgroundColor={colors.darkGrey} />
      </TouchableOpacity>
    </>
  );
};

export default Penjualan;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 30,
    paddingTop: 18,
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontFamily: fonts.poppins,
    width: '100%',
    textAlign: 'center',
  },
  topButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    color: 'white',
    fontSize: 18,
    fontFamily: fonts.poppins,
  },
  userAccountContainer: {
    flexDirection: 'row',
  },
  userAccountDropdownContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'flex-end',
    height: 28,
    marginLeft: 15,
    borderRadius: 5,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  userAccountDropdown: {
    backgroundColor: colors.light,
    borderRadius: 5,
  },
  customerTypeContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: 123,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  customerTypeContainerRight: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 9,
  },
  customerNameContainer: {
    backgroundColor: colors.light,
    flex: 1,
    alignItems: 'flex-end',
    height: 28,
    marginLeft: 15,
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 5,
  },
  customerNameText: {
    width: '100%',
    textAlign: 'right',
  },

  itemWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: 'white',
    height: 250,
    // marginHorizontal: 14,
    position: 'absolute',
    width: '90%',
    top: -48,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 12,
  },
  detailText: {
    fontFamily: fonts.poppins,
    fontSize: 24,
    color: colors.primaryGold,
  },
  produkText: {
    fontFamily: fonts.poppinsMedium,
  },
  productCardContainer: {
    backgroundColor: colors.secondaryGold,
    height: 64,
    elevation: 5,
    borderRadius: 7,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    flexDirection: 'row',
  },
  productTitleContainer: {
    width: '60%',
    height: '80%',
  },
  productText: {
    fontSize: 14,
  },
  quantityContainer: {
    height: '80%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  plusMinusContainer: {
    flexDirection: 'row',
    // width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    // backgroundColor: 'yellow',
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

  addProductButton: {
    backgroundColor: colors.primaryGold,
    paddingHorizontal: 50,
    paddingVertical: 6,
    borderRadius: 20,
  },
  addProductText: {
    color: colors.white,
  },
  panelOpenContainer: {
    width: '100%',
    height: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  detailsContainer: {
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  rowLineContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailsLabel: color => ({
    fontFamily: fonts.poppins,
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
  saveButton: {
    backgroundColor: colors.primaryGold,
    width: '50%',
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

const Details = () => {
  var color = '';
  return (
    <View style={styles.detailsContainer}>
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
        <Text style={styles.detailsLabel((color = colors.black))}>Total</Text>
        <Text style={styles.detailsLabel((color = colors.black))}>
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
