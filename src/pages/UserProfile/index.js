import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ILNullProfile} from '../../assets';
import {Header, MainProfile, List} from '../../component';
import {FireBase} from '../../config';
import {colors, getData} from '../../utils';

const UserProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    pekerjaan: '',
    photo: ILNullProfile,
  });
  useEffect(() => {
    getData('user').then((response) => {
      const data = response;
      data.photo = {uri: response.photo};
      setProfile(data);
    });
  }, []);

  const signOut = () => {
    FireBase.auth()
      .signOut()
      .then(() => {
        console.log('sign out berhasil');
        navigation.replace('GetStarted');
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: 'white',
        });
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.space(10)} />
      {profile.fullName.length > 0 && (
        <MainProfile
          name={profile.fullName}
          desc={profile.pekerjaan}
          photo={profile.photo}
        />
      )}

      <View style={styles.space(14)} />
      <List
        doctorName="Edit Profile"
        description="Last updated yesterday"
        type="list-doctor"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        doctorName="Language"
        description="Last updated yesterday"
        type="list-doctor"
        icon="language"
      />
      <List
        doctorName="Give us rate"
        description="Last updated yesterday"
        type="list-doctor"
        icon="give-rate"
      />
      <List
        doctorName="Sign Out"
        description="Last updated yesterday"
        type="list-doctor"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  space: (x) => ({
    height: x,
  }),
});
