import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {ILDocUmum} from '../../../assets';

const Categoris = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <ILDocUmum style={styles.illustrasion} width={46} height={46} />
      <Text style={styles.text1}>Saya butuh</Text>
      <Text style={styles.text2}>{title}</Text>
    </View>
  );
};

export default Categoris;

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 130,
    backgroundColor: colors.card.bgDefault,
    borderRadius: 10,
    padding: 12,
    alignSelf: 'flex-start',
    marginRight: 10,
  },
  illustrasion: {
    marginBottom: 28,
  },
  text1: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.default,
  },
  text2: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: colors.text.default,
  },
});
