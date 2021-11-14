import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Gap = ({width, height, backgroundColor, borderRadius}) => {
  return (
    <View style={styles.gap(width, height, backgroundColor, borderRadius)} />
  );
};

export default Gap;

const styles = StyleSheet.create({
  gap: (width, height, backgroundColor, borderRadius) => ({
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  }),
});
