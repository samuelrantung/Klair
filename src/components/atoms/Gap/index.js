import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Gap = ({width, height, backgroundColor}) => {
  return <View style={styles.gap(width, height, backgroundColor)} />;
};

export default Gap;

const styles = StyleSheet.create({
  gap: (width, height, backgroundColor) => ({
    width: width,
    height: height,
    backgroundColor: backgroundColor,
  }),
});
