import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Gap} from '../..';
import {colors} from '../../../assets';

const Header = () => {
  return (
    <View style={styles.header}>
      <Gap height={5} width={40} backgroundColor="grey" borderRadius={20} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
