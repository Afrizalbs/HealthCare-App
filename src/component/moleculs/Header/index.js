import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';
import {Button} from '../../atoms';

export default function Header({title, onPress}) {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.space(30)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 19,
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Nunito-Regular',
    color: colors.text.default,
    flex: 1,
    textAlign: 'center',
  },
  space: (x) => ({
    width: x,
  }),
});
