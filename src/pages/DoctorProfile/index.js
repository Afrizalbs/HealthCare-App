import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {ILNullProfile} from '../../assets';
import {Button, Header, MainProfile, ProfileItem} from '../../component';

const DoctorProfile = ({navigation, route}) => {
  // parsing data
  const dataDoctor = route.params;
  // console.log('data parsing: ', dataDoctor);
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainProfile
          name={dataDoctor.data.fullName}
          desc={dataDoctor.data.profession}
          photo={
            dataDoctor.data.photo === undefined
              ? ILNullProfile
              : {uri: dataDoctor.data.photo}
          }
          verified={
            dataDoctor.data.verified === true
              ? 'Verified ☑️'
              : 'Not Verified ❎'
          }
        />
        <ProfileItem label="Alumnus" desc={dataDoctor.data.university} />
        <ProfileItem
          label="Tempat Praktik"
          desc={dataDoctor.data.hospital_address}
        />
        <ProfileItem label="No. STR" desc={dataDoctor.data.str_number} />
        <View style={styles.wrapper}>
          {dataDoctor.data.verified === true ? (
            <Button
              title="Start Consultation"
              onPress={() => navigation.navigate('Chatting', dataDoctor)}
            />
          ) : (
            <Button
              title="Start Consultation"
              disable
              onPress={() => navigation.navigate('Chatting', dataDoctor)}
            />
          )}
        </View>
      </ScrollView>
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
