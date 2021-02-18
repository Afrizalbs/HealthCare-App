import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = ({value, onChangeText, onButtonPress, placeholder}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Button
        type="btn-send"
        disable={value.length < 1}
        onPress={onButtonPress}
      />
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
