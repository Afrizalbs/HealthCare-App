import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Header, MainProfile, ProfileItem} from '../../component';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <MainProfile
        name={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
        photo={{uri: dataDoctor.data.photo}}
      />
      <ProfileItem label="Alumnus" desc={dataDoctor.data.university} />
      <ProfileItem
        label="Tempat Praktik"
        desc={dataDoctor.data.hospital_address}
      />
      <ProfileItem label="No. STR" desc={dataDoctor.data.str_number} />
      <View style={styles.wrapper}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', dataDoctor)}
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
