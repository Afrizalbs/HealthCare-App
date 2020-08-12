import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
      <Button type="btn-send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  input: {
    backgroundColor: colors.input.bgDefault,
    borderRadius: 10,
    padding: 14,
    fontFamily: fonts.primary[400],
    flex: 1,
    marginRight: 10,
    maxHeight: 45,
  },
});
