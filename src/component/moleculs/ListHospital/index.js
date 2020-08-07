import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyHospital1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListHospital = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={DummyHospital1} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Rumah Sakit Citra Bunga Merdeka</Text>
        <Text style={styles.address}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.default,
    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 80,
    borderRadius: 11,
    marginRight: 16,
  },
  textWrapper: {
    maxWidth: 160,
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.secondary,
  },
  address: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.disabled,
    marginTop: 4,
  },
});
