import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ProfileItem = ({label, desc}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.default,
  },
  label: {
    fontFamily: fonts.primary[400],
    color: colors.text.disabled,
    fontSize: 14,
  },
  desc: {
    fontFamily: fonts.primary[400],
    color: colors.text.default,
    fontSize: 14,
    marginTop: 6,
  },
});
