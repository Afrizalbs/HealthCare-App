import React from 'react';
import {StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Header, List, MainProfile} from '../../component';
import {FireBase} from '../../config';
import {colors} from '../../utils';

const UserProfile = ({navigation, route}) => {
  const profile = route.params;

  const signOut = () => {
    FireBase.auth()
      .signOut()
      .then(() => {
        navigation.reset({index: 0, routes: [{name: 'GetStarted'}]});
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
        description="Ganti bahasa"
        type="list-doctor"
        icon="language"
      />
      <List
        doctorName="Give us rate"
        description="Beri kami rating"
        type="list-doctor"
        icon="give-rate"
      />
      <List
        doctorName="Sign Out"
        description="Ketuk untuk keluar akun"
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
