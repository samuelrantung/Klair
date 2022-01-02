import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {
  ArrowBack,
  ArrowBack2,
  Calendar,
  colors,
  fonts,
  PenjualanBg,
  SearchIcon,
  SortIcon,
} from '../../assets';
import {Gap} from '../../components';

// const DATA =

const TableRow = () => {
  return (
    <View style={styles.dataContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.dataDateContainer}>
          <Text style={styles.dataDate}>11/10/2021</Text>
          <Text style={styles.dataTime}>Senin 18:10</Text>
        </View>
        <View style={styles.dataDetailsContainer}>
          <Text style={styles.dataName}>Chandra Mangare</Text>
          <Text style={styles.dataStatus}>Lunas</Text>
        </View>
        <View style={styles.dataTotalContainer}>
          <Text style={styles.dataTotal}>Rp</Text>
          <Text style={styles.dataTotal}>267.500</Text>
        </View>
      </View>
    </View>
  );
};

const SalesSummary = ({navigation}) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  return (
    <View style={styles.page}>
      <ImageBackground source={PenjualanBg} style={styles.background}>
        <Gap height={18} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>RINGKASAN PENJUALAN</Text>
        </View>

        <Gap height={13} />

        <View style={styles.detailContainer}>
          <View style={styles.searchBarContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <ArrowBack2 />
            </TouchableOpacity>
            <View style={styles.searchInputContainer}>
              <SearchIcon
                preserveAspectRatio="xMinYMin slice"
                height={12}
                width={12}
              />
              <TextInput
                placeholder="Cari informasi penjualan"
                style={styles.searchInput}
              />
            </View>
            <TouchableOpacity onPress={() => setOpenCalendar(!openCalendar)}>
              <Calendar color={'white'} />
            </TouchableOpacity>
          </View>

          <Gap height={10} />

          <View style={styles.dateAndSortContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Calendar
                preserveAspectRatio="xMinYMin slice"
                height={12}
                width={12}
                color="lightgrey"
              />
              <Gap width={12} />
              <Text style={styles.dateAndSortLabel}>tanggal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <SortIcon />
              <Gap width={12} />
              <Text style={styles.dateAndSortLabel}>terbaru</Text>
            </TouchableOpacity>
          </View>

          <Gap height={12} />

          <View style={styles.totalSalesContainer}>
            <Text style={styles.totalSalesTitle}>Total Penjualan</Text>
            <View style={styles.totalSalesAmountContainer}>
              <Text style={styles.totalSalesPrefix}>Rp</Text>
              <Text style={styles.totalSales}>3.473.000</Text>
            </View>
          </View>

          <Gap height={10} />

          <View style={styles.totalPaymentContainer}>
            <View style={styles.totalPaidContainer}>
              <Text style={styles.totalPaidLabel}>Total terbayar</Text>
              <View style={styles.totalPaidAmountContainer}>
                <Text style={styles.currency}>Rp</Text>
                <Text style={styles.amount}>3.244.000</Text>
              </View>
            </View>
            <Gap width={33} />
            <View style={styles.totalPaidContainer}>
              <Text style={styles.totalPaidLabel}>Total belum terbayar</Text>
              <View style={styles.totalPaidAmountContainer}>
                <Text style={styles.currency}>Rp</Text>
                <Text style={styles.amount}>3.244.000</Text>
              </View>
            </View>
          </View>
        </View>

        <Gap height={25} />

        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </ImageBackground>
      {openCalendar ? (
        <View style={styles.datePickWrapper}>
          <View style={styles.datePickContainer}>
            <View style={styles.selectContainer}>
              <Text style={styles.datePickLabel}>From</Text>
              <TouchableOpacity style={styles.datePickButton}>
                <Text style={styles.datePickLabel}>Select</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectContainer}>
              <Text style={styles.datePickLabel}>To</Text>
              <TouchableOpacity style={styles.datePickButton}>
                <Text style={styles.datePickLabel}>Select</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default SalesSummary;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  background: {
    flex: 1,
  },

  titleContainer: {
    // backgroundColor: 'yellow',
    // paddingHorizontal:
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: colors.white,
    fontFamily: fonts.poppinsBold,
    textAlign: 'center',
  },

  detailContainer: {
    paddingHorizontal: 30,
  },

  searchBarContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInputContainer: {
    backgroundColor: colors.white,
    width: '70%',
    borderRadius: 25,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchInput: {
    padding: 0,
    paddingHorizontal: 5,
  },

  dateAndSortContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    backgroundColor: colors.white,
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 3,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateAndSortLabel: {
    fontFamily: fonts.poppins,
    fontSize: 12,
    color: colors.lightGrey,
  },

  datePickWrapper: {
    width: '100%',
    paddingHorizontal: 30,
    position: 'absolute',
    top: '15%',
  },
  datePickContainer: {
    backgroundColor: colors.white,
    borderRadius: 8,
    // height: 70,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  selectContainer: {
    width: 140,
    // height: 40,
  },
  datePickLabel: {
    color: colors.darkNavy,
    fontSize: 12,
    fontFamily: fonts.poppins,
  },
  datePickButton: {
    width: '100%',
    borderWidth: 2,
    borderColor: colors.darkNavy,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },

  totalSalesContainer: {
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    height: 30,
    borderRadius: 30,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalSalesTitle: {
    color: colors.lightGrey,
    fontFamily: fonts.poppins,
    fontSize: 12,
  },
  totalSalesAmountContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    // backgroundColor: 'yellow',
  },
  totalSalesPrefix: {
    fontSize: 18,
    fontFamily: fonts.poppinsSemiBold,
    color: colors.lightGrey,
  },
  totalSales: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 18,
    color: colors.primaryGold,
  },

  totalPaymentContainer: {
    flexDirection: 'row',
  },
  totalPaidContainer: {
    flex: 2,
  },
  totalPaidLabel: {
    fontFamily: fonts.poppins,
    fontSize: 12,
  },
  totalPaidAmountContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currency: {
    fontSize: 12,
    fontFamily: fonts.poppinsSemiBold,
    color: colors.lightGrey,
  },
  amount: {
    fontFamily: fonts.poppinsMedium,
    fontSize: 12,
    color: colors.primaryGold,
  },

  dataContainer: {
    // backgroundColor: 'yellow',
    width: '100%',
    // height: 200,
    paddingHorizontal: 10,
  },
  rowContainer: {
    backgroundColor: colors.white,
    height: 44,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  dataDateContainer: {
    width: 80,
    // flex: 1,
    justifyContent: 'center',
  },
  dataDate: {
    fontSize: 12,
    fontFamily: fonts.poppins,
  },
  dataTime: {
    fontFamily: fonts.poppins,
    fontSize: 10,
  },
  dataDetailsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  dataName: {
    fontSize: 12,
    fontFamily: fonts.poppins,
  },
  dataStatus: {
    fontSize: 10,
    fontFamily: fonts.poppins,
    color: colors.primaryGold,
  },
  dataTotalContainer: {
    width: 125,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dataTotal: {
    fontFamily: fonts.poppins,
    fontSize: 12,
  },
});
