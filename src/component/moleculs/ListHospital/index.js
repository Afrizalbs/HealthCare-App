import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListHospital = ({title, address, img}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: img}} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.address}>{address}</Text>
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
    maxWidth: 230,
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
    maxHeight: '100%',
  },
});
