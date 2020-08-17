import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, MainProfile, Input, Button} from '../../component';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainProfile />
        <View style={styles.space(26)} />
        <View style={styles.content}>
          <Input label="Full Name" />
          <View style={styles.space(24)} />
          <Input label="Pekerjaan" />
          <View style={styles.space(24)} />
          <Input label="Email Address" />
          <View style={styles.space(24)} />
          <Input label="Password" />
          <View style={styles.space(40)} />
          <Button
            title="Save Profile"
            onPress={() => navigation.goBack('UserProfile')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  space: (x) => ({
    height: x,
  }),
});
