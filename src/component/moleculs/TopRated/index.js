import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IconStar} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const TopRated = ({name, desc, onPress, profilePicture}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.avatarWrapper}>
        <Image source={profilePicture} style={styles.avatar} />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.jobName}>{desc}</Text>
      </View>
      <View style={styles.star}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </TouchableOpacity>
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
    borderRadius: 46 / 2,
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
