import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, List, MainProfile} from '../../component';
import {FireBase} from '../../config';
import {colors, fonts, showErrorMessage, showSuccessMessage} from '../../utils';

const UserProfile = ({navigation, route}) => {
  const profile = route.params;
  const user = FireBase.auth().currentUser;
  // console.log('siapa yg login: ', user);

  const sendEmailVerified = () => {
    FireBase.auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        showSuccessMessage(
          'Link Verifikasi sudah terkirim, silahkan cek email anda!',
        );
      })
      .catch((err) => {
        const errorMessage = err.message;
        showErrorMessage(errorMessage);
      });
  };

  const signOut = () => {
    FireBase.auth()
      .signOut()
      .then(() => {
        navigation.reset({index: 0, routes: [{name: 'GetStarted'}]});
      })
      .catch((error) => {
        const errorMessage = error.message;
        showErrorMessage(errorMessage);
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.space(10)} />
      {profile.fullName.length > 0 && (
        <MainProfile
          name={profile.fullName}
          desc={`${profile.umur} thn | ${profile.tinggiBadan} cm | ${profile.beratBadan} kg`}
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
      {user.emailVerified === false && (
        <View>
          <List
            doctorName="Verified User"
            description="Send link verification"
            type="list-doctor"
            icon="language"
            onPress={sendEmailVerified}
          />
          <Text style={styles.warningText}>
            Segera Verifikasi email agar bisa login aplikasi setiap saat!
          </Text>
        </View>
      )}

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
  warningText: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    color: 'red',
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: colors.border.default,
  },
});
