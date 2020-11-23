import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../utils';
import {ILDocUmum, ILPsikiater, ILDocObat, ILDocAnak} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Categoris = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <ILDocUmum style={styles.illustrasion} width={46} height={46} />;
    }
    if (category === 'psikiater') {
      return <ILPsikiater style={styles.illustrasion} width={46} height={46} />;
    }
    if (category === 'dokter obat') {
      return <ILDocObat style={styles.illustrasion} width={46} height={46} />;
    }
    if (category === 'dokter anak') {
      return <ILDocAnak style={styles.illustrasion} width={46} height={46} />;
    }
    return <ILDocUmum style={styles.illustrasion} width={46} height={46} />;
  };
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Icon />
      <Text style={styles.text1}>Saya butuh</Text>
      <Text style={styles.text2}>{category}</Text>
    </TouchableOpacity>
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
