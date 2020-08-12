import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {DummyDoctor5} from '../../../assets';
import {Button} from '../../atoms';

const HProfile = () => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" />
      <View style={styles.wrapper}>
        <Text style={styles.name}>Lana Rhoades</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor5} style={styles.avatar} />
    </View>
  );
};

export default HProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 46,
    height: 46,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.desc,
    textAlign: 'center',
  },
  wrapper: {
    marginLeft: 25,
  },
});
