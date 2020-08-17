import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, MainProfile, List} from '../../component';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.space(10)} />
      <MainProfile />
      <View style={styles.space(14)} />
      <List
        doctorName="Edit Profile"
        description="Last updated yesterday"
        type="list-doctor"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        doctorName="Edit Profile"
        description="Last updated yesterday"
        type="list-doctor"
        icon="language"
      />
      <List
        doctorName="Edit Profile"
        description="Last updated yesterday"
        type="list-doctor"
        icon="give-rate"
      />
      <List
        doctorName="Edit Profile"
        description="Last updated yesterday"
        type="list-doctor"
        icon="help"
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
