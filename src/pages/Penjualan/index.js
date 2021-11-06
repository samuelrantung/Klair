import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ArrowBack2, Calendar, fonts, PenjualanBg} from '../../assets';
import {Gap} from '../../components';

const Penjualan = () => {
  return (
    <ImageBackground style={styles.background} source={PenjualanBg}>
      <View style={styles.container}>
        <Text style={styles.title}>PENJUALAN</Text>
        <Gap height={11} />
        <View style={styles.topButtonContainer}>
          <TouchableOpacity>
            <ArrowBack2 />
          </TouchableOpacity>
          <Text style={styles.dateText}>22 September 2021</Text>
          <TouchableOpacity>
            <Calendar />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
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
});
