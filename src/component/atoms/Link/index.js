import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Link({title, fontsize, align, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(fontsize, align)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (fontsize, align) => ({
    fontFamily: 'Nunito-Regular',
    fontSize: fontsize,
    textDecorationLine: 'underline',
    color: '#7D8797',
    textAlign: align,
  }),
});
