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
import DropDownPicker from 'react-native-dropdown-picker';
import Product from './Product';
import Details from './Details';

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

  const [openUserAccount, setOpenUserAccount] = useState(false);
  const [userAccount, setUserAccount] = useState(null);
  const [userAccountItems, setUserAccountItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'bananawef'},
    {label: 'Banana', value: 'bananawefsdf'},
    {label: 'Banana', value: 'bananawefsdfsdf'},
    {label: 'Banana', value: 'bananawefsdfsdfsdf'},
    {label: 'Banana', value: 'bananawefsdfsdfsdfsdfs'},
    {label: 'Banana', value: 'bananawefsdfsdfsdfsdfswer'},
    {label: 'Banana', value: 'bananawefsdfsdfsdfsdfswer34234'},
    {label: 'Banana', value: 'bananawefsdfsdfsdfsdfswer34234sdfwe'},
  ]);

  const [openCustomer, setOpenCustomer] = useState(false);
  const [customer, setCustomer] = useState(null);
  const [customerItems, setCustomerItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana', value: 'bananawef'},
    {label: 'Banana', value: 'bananawefsdf'},
    {label: 'Banana', value: 'bananawefsdfsdf'},
    {label: 'Banana', value: 'bananawefsdfsdfsdf'},
    {label: 'Banana', value: 'bananawefsdfsdfsdfsdfs'},
    {label: 'Banana', value: 'bananawefsdfsdfsdfsdfswer'},
    {label: 'Banana', value: 'bananawefsdfsdfsdfsdfswer34234'},
    {label: 'Banana', value: 'bananawefsdfsdfsdfsdfswer34234sdfwe'},
  ]);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground style={styles.background} source={PenjualanBg}>
        <View style={styles.insideContainer}>
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
          {/* <View> */}
          <View>
            <View style={styles.userAccountContainer}>
              <UserIcon />
              <View style={styles.userAccountDropdownContainer}>
                <DropDownPicker
                  open={openUserAccount}
                  searchable
                  value={userAccount}
                  items={userAccountItems}
                  setOpen={setOpenUserAccount}
                  setValue={setUserAccount}
                  setItems={setUserAccountItems}
                  style={styles.userAccountDropdown}
                  placeholder="Pilih nama pegawai"
                  zIndex={2000}
                  dropDownContainerStyle={
                    styles.userAccountDropdownContainerStyle
                  }
                />
              </View>
            </View>
            <Gap height={12} />
            <View style={styles.customerContainer}>
              <View style={styles.customerTypeContainer}>
                <UserIcon2 />
                <View style={styles.customerTypeContainerRight}>
                  <Text style={styles.customerTypeText}>Customer</Text>
                </View>
              </View>
              <Gap width={15} />
              <View style={styles.customerNameDropdownContainer}>
                <DropDownPicker
                  open={openCustomer}
                  searchable
                  value={customer}
                  items={customerItems}
                  setOpen={setOpenCustomer}
                  setValue={setCustomer}
                  setItems={setCustomerItems}
                  style={styles.customerNameDropdown}
                  placeholder="Pilih nama pegawai"
                  zIndex={1000}
                  dropDownContainerStyle={
                    styles.userAccountDropdownContainerStyle
                  }
                />
              </View>
            </View>
          </View>

          <Gap height={68} />
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
    </View>
  );
};

export default Penjualan;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // paddingHorizontal: 30,
    paddingTop: 18,
  },
  insideContainer: {
    paddingHorizontal: 30,
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
    // zIndex: 2000,
  },
  customerContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  userAccountDropdownContainer: {
    // backgroundColor: 'red',
    flex: 1,
    alignItems: 'flex-end',
    height: 28,
    marginLeft: 15,
    borderRadius: 5,
    // paddingHorizontal: 9,
    // paddingVertical: 6,
  },
  userAccountDropdown: {
    // backgroundColor: 'yellow',
    borderColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 0,
    height: 28,
    borderRadius: 5,
  },
  userAccountDropdownContainerStyle: {
    borderColor: 'white',
  },
  customerTypeContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    width: 123,
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 9,
    height: 28,
    justifyContent: 'center',
  },
  customerTypeContainerRight: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 9,
  },
  customerNameDropdownContainer: {
    flex: 1,
  },
  customerNameDropdown: {
    borderColor: 'white',
    height: 28,
    width: '100%',
    borderRadius: 5,
  },

  itemWrapper: {
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
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
});
