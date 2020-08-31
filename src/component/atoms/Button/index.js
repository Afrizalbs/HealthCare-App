import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconOnly from './IconOnly';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts, colors} from '../../../utils';
import BtnSend from './BtnSend';
import {Profile} from '../../moleculs';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'btn-send') {
    return <BtnSend disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.wrapperDisable}>
        <Text style={styles.textDisable}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.wrapper(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: (type) => ({
    height: 45,
    backgroundColor: type === 'secondary' ? '#FFF' : colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  }),
  wrapperDisable: {
    height: 45,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: colors.button.sendDisable,
  },
  text: (type) => ({
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: type === 'secondary' ? colors.secondary : '#FFFFFF',
  }),
  textDisable: {
    fontSize: 18,
    fontFamily: fonts.primary[600],
    color: colors.button.textDisable,
  },
});

export default Button;
