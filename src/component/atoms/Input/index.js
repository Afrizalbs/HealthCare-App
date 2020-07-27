import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

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
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    color: '#7D8797',
    marginBottom: 6,
  },
  input: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E9E9E9',
    height: 55,
    fontSize: 20,
    padding: 12,
  },
});
