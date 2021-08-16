import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  colors,
  fonts,
  OnBoarding1bg,
  OnBoarding1ilstr,
  OnBoarding2bg,
  OnBoarding2ilstr,
  OnBoarding3bg,
  OnBoarding3ilstr,
} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Gap} from '../../components';
import Swiper from 'react-native-swiper';
import {useNavigation} from '@react-navigation/native';

const Page = ({
  title,
  content,
  background,
  buttonText = 'Berikutnya',
  onNext,
  illustration,
}) => {
  const navigation = useNavigation();

  const RenderIllustration = () => {
    if (illustration === 'page1') {
      return <OnBoarding1ilstr width={wp('75%')} />;
    } else if (illustration === 'page2') {
      return <OnBoarding2ilstr width={wp('75%')} />;
    } else if (illustration === 'page3') {
      return <OnBoarding3ilstr width={wp('75%')} />;
    }
  };
  return (
    <ImageBackground
      source={background}
      style={styles.bg}
      imageStyle={styles.bgStyles}>
      <Gap height={hp('8%')} />
      <View style={styles.ilstrCont}>
        <RenderIllustration />
      </View>
      <View style={styles.bottomCont}>
        <View style={styles.textCont}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textContent}>{content}</Text>
        </View>
        <View style={styles.buttonCont}>
          {/* <View style={styles.navigationDotsCont}>
            <View style={styles.dots} />
          </View> */}
          <TouchableOpacity style={styles.buttonLewatiCont} onPress={onNext}>
            <Text style={styles.buttonNextText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signTextCont}>
          <Text style={styles.signText}>Sudah punya akun?</Text>
          <Gap width={8} />
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.signTextButton}>Masuk</Text>
          </TouchableOpacity>
          <Gap width={8} />
          <Text style={styles.signText}>atau</Text>
          <Gap width={8} />
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signTextButton}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const Onboarding = ({navigation}) => {
  const swiper = React.useRef(null);
  const handleNext = () => {
    if (swiper && swiper.current) {
      swiper.current.scrollBy(1);
    }
  };
  return (
    <Swiper
      ref={swiper}
      loop={false}
      paginationStyle={styles.paginationStyle}
      dotStyle={styles.dotStyle}
      activeDotStyle={styles.activeDotStyle}>
      <View>
        <Page
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              nisl id viverra neque. Id consequat interdum ullamcorper quis id
              aenean accumsan."
          background={OnBoarding1bg}
          illustration="page1"
          onNext={() => handleNext()}
        />
      </View>
      <View>
        <Page
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              nisl id viverra neque. Id consequat interdum ullamcorper quis id
              aenean accumsan."
          background={OnBoarding2bg}
          illustration="page2"
          onNext={() => handleNext()}
        />
      </View>
      <View>
        <Page
          title="Lorem ipsum dolor sit amet"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              nisl id viverra neque. Id consequat interdum ullamcorper quis id
              aenean accumsan."
          background={OnBoarding3bg}
          illustration="page3"
          buttonText="Selesai"
          onNext={() => navigation.navigate('Signin')}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  //swiper
  paginationStyle: {
    height: hp('5%'),
    width: wp('100%'),
    bottom: hp('11%'),
    paddingHorizontal: wp('10%'),
    justifyContent: 'flex-start',
  },
  dotStyle: {
    backgroundColor: colors.light,
    height: wp('4%'),
    width: wp('4%'),
    borderRadius: 20,
    marginRight: 25,
  },
  activeDotStyle: {
    backgroundColor: colors.secondaryGold,
    height: wp('4%'),
    width: wp('8%'),
    borderRadius: 20,
    marginRight: 25,
  },
  //swiper
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
    justifyContent: 'flex-end',
    // backgroundColor: 'yellow',
  },
  // navigationDotsCont: {
  //   height: '100%',
  //   width: wp('30%'),
  //   // justifyContent: 'space-between',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   backgroundColor: 'red',
  // },
  // dots: {
  //   height: '40%',
  //   aspectRatio: 1,
  //   // width: 15,
  //   // height: 15,
  //   backgroundColor: colors.light,
  //   borderRadius: 20,
  // },
  buttonLewatiCont: {
    backgroundColor: colors.secondaryGold,
    height: '100%',
    width: wp('25%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 13,
  },
  buttonNextText: {
    color: colors.light,
    fontSize: wp('4%'),
  },
  signTextCont: {
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signText: {
    color: colors.light,
    fontSize: wp('4.5%'),
    textAlign: 'center',
  },
  signTextButton: {
    color: colors.light,
    fontSize: wp('4.5%'),
    textAlign: 'center',
    fontFamily: fonts.robotoMedium,
  },
});

export default Onboarding;
