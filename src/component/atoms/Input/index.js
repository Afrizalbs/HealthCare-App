import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {fonts} from '../../../utils';

export default function Input({label, ...rest}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: '#7D8797',
    marginBottom: 6,
  },
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    height: 45,
    fontSize: 16,
    padding: 12,
  },
});
