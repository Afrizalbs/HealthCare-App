import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor3} from '../../assets';
import {Header, MainProfile, ProfileItem, Button} from '../../component';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <MainProfile
        name="Nairobi Putri Hayza"
        desc="Dokter Anak"
        photo={DummyDoctor3}
      />
      <ProfileItem label="Alumnus" desc="Universitas Diponegoro" />
      <ProfileItem label="Tempat Praktik" desc="Rs. Hermina, semarang" />
      <ProfileItem label="No. STR" desc="0000116622081996" />
      <View style={styles.wrapper}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting')}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: 40,
    paddingVertical: 24,
  },
});
