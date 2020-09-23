import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {fonts, colors} from '../../../utils';

export default function Input({label, disable, ...rest}) {
  const [border, setBorder] = useState(colors.border.default);
  const onFocusForm = () => {
    setBorder(colors.border.onFocus);
  };
  const onBlurForm = () => {
    setBorder(colors.border.default);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        {...rest}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.disabled,
    marginBottom: 6,
  },
  input: (border) => ({
    borderRadius: 10,
    borderWidth: 1,
    borderColor: border,
    height: 45,
    fontSize: 16,
    padding: 12,
  }),
});
