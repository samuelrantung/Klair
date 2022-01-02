import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {colors, Dompet, fonts, PenjualanBg} from '../../assets';
import {Gap} from '../../components';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Dashboard, Signin} from '..';

// const Tab = createBottomTabNavigator();

const PersonalDashboard = () => {
  return (
    <ImageBackground style={styles.background} source={PenjualanBg}>
      <Gap height={40} />
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
      </View>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Settings" component={Signin} />
      </Tab.Navigator> */}
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
    paddingHorizontal: 26,
  },
  topComponentContainer: {
    width: '100%',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
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
});
