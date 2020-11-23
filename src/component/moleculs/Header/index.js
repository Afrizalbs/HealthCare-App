import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import HProfile from './HProfile';

export default function Header({title, onPress, type, name, desc, photo}) {
  if (type === 'HeaderProfile') {
    return <HProfile onPress={onPress} name={name} desc={desc} photo={photo} />;
  }
  return (
    <View style={styles.container(type)}>
      <Button
        type="icon-only"
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.text(type)}>{title}</Text>
      <View style={styles.space(24)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: type === 'dark' ? colors.secondary : 'white',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  text: (type) => ({
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === 'dark' ? 'white' : colors.text.default,
    flex: 1,
    textAlign: 'center',
    textTransform: 'capitalize',
  }),
  space: (x) => ({
    width: x,
  }),
});
