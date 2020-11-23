import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ILNullProfile} from '../../../assets';
import {colors, fonts, getData} from '../../../utils';

const Profile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILNullProfile,
    fullName: '',
    pekerjaan: '',
  });
  useEffect(() => {
    getData('user').then((response) => {
      // console.log('data user: ', response);
      const data = response;
      data.photo = {uri: response.photo};
      setProfile(response);
    });
  }, []);
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
