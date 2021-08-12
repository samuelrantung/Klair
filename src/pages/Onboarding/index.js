import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, OnBoarding1bg, OnBoarding1ilstr} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Gap} from '../../components';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Onboarding = () => {
  return (
    <ImageBackground
      source={OnBoarding1bg}
      style={styles.bg}
      imageStyle={styles.bgStyles}>
      <Gap height={hp('8%')} />
      <View style={styles.ilstrCont}>
        <OnBoarding1ilstr width={wp('75%')} />
      </View>
      <View style={styles.bottomCont}>
        <View style={styles.textCont}>
          <Text style={styles.textTitle}>Lorem ipsum dolor sit amet</Text>
          <Text style={styles.textContent}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisl
            id viverra neque. Id consequat interdum ullamcorper quis id aenean
            accumsan.
          </Text>
        </View>
        <View style={styles.buttonCont}>
          <View style={styles.navigationDotsCont}>
            <View style={styles.dots}></View>
            <View style={styles.dots}></View>
            <View style={styles.dots}></View>
          </View>
          <TouchableOpacity style={styles.buttonLewatiCont}>
            <Text style={styles.buttonLewatiText}>Lewati</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signTextCont}>
          <Text style={styles.signText}>
            Sudah punya akun? Masuk atau Daftar
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  bgStyles: {
    resizeMode: 'stretch',
  },
  ilstrCont: {
    paddingHorizontal: wp('10%'),
  },
  bottomCont: {
    paddingHorizontal: wp('10%'),
    marginBottom: hp('4%'),
    flex: 1,
    alignItems: 'center',
  },
  textCont: {
    position: 'absolute',
    bottom: hp('17%'),
  },
  textTitle: {
    color: colors.light,
    fontSize: wp('7.5%'),
  },
  textContent: {
    color: colors.light,
    fontSize: wp('4.4%'),
    lineHeight: 28,
  },
  buttonCont: {
    height: hp('5%'),
    width: wp('100%'),
    position: 'absolute',
    bottom: hp('7%'),
    paddingHorizontal: wp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigationDotsCont: {
    height: '100%',
    width: wp('30%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dots: {
    height: '40%',
    aspectRatio: 1,
    // width: 15,
    // height: 15,
    backgroundColor: colors.light,
    borderRadius: 20,
  },
  buttonLewatiCont: {
    backgroundColor: colors.secondaryGold,
    height: '100%',
    width: wp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 10,
  },
  buttonLewatiText: {
    color: colors.light,
    fontSize: wp('4.4%'),
  },
  signTextCont: {
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
  },
  signText: {
    color: colors.light,
    fontSize: wp('4.5%'),
    textAlign: 'center',
  },
});

export default Onboarding;
