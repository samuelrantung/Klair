import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import {colors, Dompet, fonts, PenjualanBg} from '../../assets';
import {Gap} from '../../components';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Dashboard, Signin} from '..';

// const Tab = createBottomTabNavigator();

const PersonalDashboard = () => {
  const today = new Date();
  return (
    <ImageBackground style={styles.background} source={PenjualanBg}>
      <Gap height={20} />
      <View style={styles.container}>
        <View style={styles.topComponentContainer}>
          <Dompet />
          <Gap width={8} />
          <View style={styles.totalDompetContainer}>
            <Text style={styles.totalDompetLabel}>Total</Text>
            <Text style={styles.totalDompet}>Rp500.000</Text>
          </View>
          <View style={styles.filterButtonContainer}>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonLabel}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ReactNativeCalendarStrip
            scrollable={true}
            leftSelector={[]}
            rightSelector={[]}
            dateNumberStyle={{color: colors.white}}
            dateNameStyle={{color: colors.white}}
            style={styles.calendar}
            highlightDateNameStyle={{
              color: colors.primaryGold,
            }}
            highlightDateNumberStyle={{
              color: colors.primaryGold,
            }}
            highlightDateContainerStyle={{
              backgroundColor: colors.white,
            }}
            calendarHeaderStyle={{color: colors.white}}
            calendarHeaderContainerStyle={styles.calendarHeaderContainer}
            innerStyle={[]}
            selectedDate={today}
          />
        </View>
        <View style={styles.dataWrapper}>
          <Gap height={20} />
          <View style={styles.dataContainer}>
            <Text style={styles.dataLabel}>Pemasukkan</Text>
            <View style={styles.dataTotalContainer}>
              <Text style={styles.dataLabel}>Rp</Text>
              <Text style={styles.dataLabel}>2.000.000</Text>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.dataLabel}>Pengeluaran</Text>
            <View style={styles.dataTotalContainer}>
              <Text style={styles.dataLabel}>Rp</Text>
              <Text style={styles.dataLabel}>3.000.000</Text>
            </View>
          </View>
          <Gap height={10} />
          <View style={styles.dataContainer}>
            <View />
            <Gap
              height={1}
              width={'50%'}
              backgroundColor={colors.primaryGold}
            />
          </View>
          <Gap height={10} />
          <View style={styles.dataContainer}>
            <View />
            <View style={styles.dataTotalContainer}>
              <Text style={styles.dataTotalLabel}>Rp</Text>
              <Text style={styles.dataTotalLabel}>1.000.000</Text>
            </View>
          </View>
          <Gap height={30} />
          <View style={styles.dataButtonContainer}>
            <TouchableOpacity style={styles.dataButton}>
              <Text style={styles.dataButtonLabel}>
                Lihat Laporan Periode Ini
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={30} />
        <View style={styles.gapBar} />
        <Gap height={24} />
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRowContainer}>
            <Text style={styles.summaryLabel}>Penarikan</Text>
            <View style={styles.summaryAmountContainer}>
              <Text style={styles.summaryLabel}>Rp</Text>
              <Text style={styles.summaryLabel}>250.000</Text>
            </View>
          </View>
          <View style={styles.summaryRowContainer}>
            <Text style={styles.summaryLabel}>Hutang</Text>
            <View style={styles.summaryAmountContainer}>
              <Text style={styles.summaryLabel}>Rp</Text>
              <Text style={styles.summaryLabel}>200.000</Text>
            </View>
          </View>
          <View style={styles.summaryRowContainer}>
            <Text style={styles.summaryLabel}>Gaji</Text>
            <View style={styles.summaryAmountContainer}>
              <Text style={styles.summaryLabel}>Rp</Text>
              <Text style={styles.summaryLabel}>1.500.000</Text>
            </View>
          </View>
          <View style={styles.summaryRowContainer}>
            <Text style={styles.summaryLabel}>Piutang</Text>
            <View style={styles.summaryAmountContainer}>
              <Text style={styles.summaryLabel}>Rp</Text>
              <Text style={styles.summaryLabel}>300.000</Text>
            </View>
          </View>
          <View style={styles.summaryRowContainer}>
            <Text style={styles.summaryLabel}>Pengeluaran Lainnya</Text>
            <View style={styles.summaryAmountContainer}>
              <Text style={styles.summaryLabel}>Rp</Text>
              <Text style={styles.summaryLabel}>26.000</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PersonalDashboard;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  container: {
    flex: 1,
    // paddingHorizontal: 26,
  },
  topComponentContainer: {
    width: '100%',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 26,
    // marginHorizontal: 26,
  },
  totalDompetLabel: {
    fontFamily: fonts.poppins,
    color: colors.white,
    fontSize: 15,
  },
  totalDompet: {
    fontFamily: fonts.poppinsBold,
    fontSize: 18,
    color: colors.white,
  },
  filterButtonContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: colors.primaryGold,
    height: 30,
    width: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  filterButtonLabel: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.poppins,
  },

  calendar: {
    height: 84,
    borderBottomWidth: 4,
    borderBottomColor: 'rgba(255, 164, 91, 0.85)',
  },
  calendarHeaderContainer: {marginBottom: 8},

  dataWrapper: {
    paddingHorizontal: 27,
  },
  dataLabel: {
    color: colors.white,
    fontFamily: fonts.poppins,
    fontSize: 15,
  },
  dataContainer: {
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataTotalContainer: {
    // backgroundColor: 'yellow',
    // flex: 1,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataTotalLabel: {
    color: colors.white,
    fontFamily: fonts.poppinsBold,
    fontSize: 15,
  },
  dataButtonContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  dataButton: {
    height: 32,
    backgroundColor: colors.primaryGold,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  dataButtonLabel: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fonts.poppins,
  },

  gapBar: {
    width: '100%',
    height: 30,
    elevation: 5,
    backgroundColor: colors.primaryGold,
  },

  summaryContainer: {
    // backgroundColor: 'yellow',
    paddingHorizontal: 27,
  },
  summaryRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  summaryAmountContainer: {
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    color: colors.white,
    fontFamily: fonts.poppins,
    fontSize: 15,
  },
});
