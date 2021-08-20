import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = ({
  label = 'button',
  width = 100,
  height = 20,
  borderRadius = 0,
  backgroundColor = 'blue',
  onPress,
  justifyContent = 'center',
  alignItems = 'center',
  color = 'white',
  fontSize,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button(
        width,
        height,
        borderRadius,
        backgroundColor,
        justifyContent,
        alignItems,
        color,
      )}>
      <Text style={styles.text(color, fontSize)}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: (
    width,
    height,
    borderRadius,
    backgroundColor,
    justifyContent,
    alignItems,
  ) => ({
    width: width,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: backgroundColor,
    justifyContent: justifyContent,
    alignItems: alignItems,
  }),
  text: (color, fontSize) => ({
    color: color,
    fontSize: fontSize,
  }),
});

export default Button;
