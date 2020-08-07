import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>Wahid Dwipa Baskoro</Text>
        <Text style={styles.jobName}>Product Manager</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 276,
  },
  avatar: {
    width: 47,
    height: 47,
    borderRadius: 47 / 2,
  },
  wrapper: {
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    marginBottom: 1,
    color: colors.secondary,
    fontFamily: fonts.primary[600],
  },
  jobName: {
    fontSize: 12,
    color: colors.text.disabled,
    fontFamily: fonts.primary[400],
  },
});
