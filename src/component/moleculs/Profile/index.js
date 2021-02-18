import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors, fonts} from '../../../utils';

const Profile = ({onPress, profile}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={profile.photo} style={styles.avatar} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>{profile.fullName} </Text>
        <Text style={styles.jobName}>{profile.pekerjaan}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '70%',
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
    textTransform: 'capitalize',
  },
  jobName: {
    fontSize: 12,
    color: colors.text.disabled,
    fontFamily: fonts.primary[400],
    textTransform: 'capitalize',
  },
});
