import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IconSendDisable, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';

const BtnSend = ({disable, onPress}) => {
  if (disable) {
    return (
      <View style={styles.container(disable)}>
        <IconSendDisable />
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(disable)} onPress={onPress}>
      <IconSendLight />
    </TouchableOpacity>
  );
};

export default BtnSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable
      ? colors.button.sendDisable
      : colors.button.sendActive,
    height: 45,
    width: 45,
    borderRadius: 10,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingTop: 3,
    paddingRight: 3,
  }),
});
