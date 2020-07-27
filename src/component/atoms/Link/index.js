import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Link({title, fontsize, align}) {
  return (
    <View>
      <Text style={styles.text(fontsize, align)}>{title}</Text>
    </View>
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
