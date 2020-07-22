import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({type, title}) => {
  return (
    <View style={styles.wrapper(type)}>
      <Text style={styles.text(type)}>{title}</Text>
    </View>
  );
};
export default Button;
const styles = StyleSheet.create({
  wrapper: (type) => ({
    height: 65,
    backgroundColor: type === 'secondary' ? '#FFF' : '#0BCAD4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  }),
  text: (type) => ({
    fontSize: 23,
    fontWeight: '600',
    color: type === 'secondary' ? '#112340' : '#FFFFFF',
  }),
});
