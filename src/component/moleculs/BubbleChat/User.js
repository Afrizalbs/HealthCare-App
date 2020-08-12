import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const User = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatWrapper}>
        <Text style={styles.desc}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.date}>4.45 AM</Text>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  chatWrapper: {
    backgroundColor: colors.card.bgDefault,
    padding: 12,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.secondary,
  },
  date: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.disabled,
    marginTop: 8,
  },
});
