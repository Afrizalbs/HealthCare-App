import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor1, IconUserOnline, IconStar} from '../../../assets';
import {fonts, colors} from '../../../utils';

const TopRated = () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={DummyDoctor1} style={styles.avatar} />
        {/* <IconUserOnline width={20} height={20} style={styles.indicator} /> */}
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.name}>Afrizal Bagas</Text>
        <Text style={styles.jobName}>Fake Doctor</Text>
      </View>
      <View style={styles.star}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default TopRated;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  avatar: {
    height: 46,
    width: 46,
    marginRight: 15,
  },
  avatarWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
    bottom: 6,
    right: 10,
  },
  textWrapper: {
    flex: 1,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.secondary,
  },
  jobName: {
    fontSize: 12,
    fontFamily: fonts.primary[400],
    color: colors.text.disabled,
  },
  star: {
    flexDirection: 'row',
  },
});
