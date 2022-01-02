import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  PersonalAkun,
  PersonalDashboard,
  PersonalHutangPiutang,
  PersonalLaporan,
  PersonalNewTransaction,
} from '../pages';
import {
  Akun,
  colors,
  fonts,
  HutangPiutang,
  Laporan,
  PlusButton,
  Transaksi,
} from '../assets';
import {Gap} from '../components';

const Tab = createBottomTabNavigator();

const PersonalBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.white,
          height: 69,
        },
        tabBarShowLabel: false,

        headerShown: false,
      }}>
      <Tab.Screen
        name="PersonalDashboard"
        component={PersonalDashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Transaksi />
              <Text style={styles.buttonLabel}>Transaksi</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tambah"
        component={PersonalLaporan}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Laporan />
              <Text style={styles.buttonLabel}>Laporan</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Laporan"
        component={PersonalNewTransaction}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.addContainer}>
              <View style={styles.curvedLeft} />
              <Gap width={52} />
              <View style={styles.curvedRight} />
              <View style={styles.curvedBody} />
              <View style={styles.curvedMidContainer}>
                <View style={styles.curvedMid} />
              </View>
              <View style={styles.plusButtonContainer}>
                <PlusButton />
              </View>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Hutang Piutang"
        component={PersonalHutangPiutang}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <HutangPiutang />
              <Text style={styles.buttonLabel}>Hutang/Piutang</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={PersonalAkun}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.button}>
              <Akun />
              <Text style={styles.buttonLabel}>Akun</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default PersonalBottomTab;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontFamily: fonts.poppins,
    fontSize: 11,
    color: colors.lightGrey,
  },
  addContainer: {
    backgroundColor: colors.primaryGold,
    width: 110,
    height: '100%',
    flexDirection: 'row',
  },
  curvedLeft: {
    flex: 2,
    // backgroundColor: 'red',
    backgroundColor: colors.white,
    borderTopRightRadius: 100,
    // borderBottomRightRadius: 100,
  },
  curvedRight: {
    flex: 2,
    // backgroundColor: 'blue',
    backgroundColor: colors.white,
    borderTopLeftRadius: 100,
    // borderBottomLeftRadius: 100,
  },
  curvedBody: {
    position: 'absolute',
    backgroundColor: colors.white,
    // backgroundColor: 'black',
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
  curvedMidContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    position: 'absolute',
    // backgroundColor: 'yellow',
  },
  curvedMid: {
    position: 'absolute',
    backgroundColor: colors.primaryGold,
    // backgroundColor: colors.black,
    width: 68,
    height: 35,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  plusButtonContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 40,
  },
});
