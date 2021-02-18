import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {ILNullProfile} from '../../assets';
import {Button, Header, Input, MainProfile} from '../../component';
import {FireBase} from '../../config';
import {getData, showErrorMessage, storeData} from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    pekerjaan: '',
    email: '',
  });
  const [password, setPasword] = useState('');
  const [photoForDB, setPhotoForDB] = useState('');
  const [photo, setPhoto] = useState(ILNullProfile);

  useEffect(() => {
    getData('user').then((response) => {
      const data = response;
      data.photoForDB =
        response?.photo?.length > 1 ? response.photo : ILNullProfile;
      const tempPhoto =
        response?.photo?.length > 1 ? {uri: response.photo} : ILNullProfile;
      setPhoto(tempPhoto);
      setProfile(data);
    });
  }, []);

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showErrorMessage('Ups Pasword kurang dari 6 karakter!');
      } else {
        // update profile dan password
        updatePassword();
        updateProfileData();
      }
    } else {
      // hanya update profile
      updateProfileData();
    }
  };

  const updatePassword = () => {
    FireBase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((error) => {
          showErrorMessage(error.message);
        });
      }
    });
  };

  const updateProfileData = () => {
    // console.log('update profile: ', profile);
    const data = profile;
    data.photo = photoForDB;
    FireBase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data)
          .then(() => {
            navigation.replace('MainApp');
          })
          .catch(() => {
            showErrorMessage('Terjadi Masalah');
          });
      })
      .catch((error) => {
        showErrorMessage(error.message);
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const getImage = () => {
    // Open Image Library:
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxHeight: 300, maxWidth: 300},
      (response) => {
        // Same code as in above section!
        if (response.didCancel || response.error) {
          showErrorMessage('oops, Anda tidak jadi mengganti photo');
        } else {
          const source = {uri: response.uri};
          setPhotoForDB(`data:${response.type};base64, ${response.data}`); //mengambil data gambar untuk db
          setPhoto(source);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainProfile isRemove photo={photo} onPress={getImage} />
        <View style={styles.space(26)} />
        <View style={styles.content}>
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => {
              changeText('fullName', value);
            }}
          />
          <View style={styles.space(24)} />
          <Input
            label="Pekerjaan"
            value={profile.pekerjaan}
            onChangeText={(value) => {
              changeText('pekerjaan', value);
            }}
          />
          <View style={styles.space(24)} />
          <Input label="Email Address" value={profile.email} disable />
          <View style={styles.space(24)} />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(value) => {
              setPasword(value);
            }}
          />
          <View style={styles.space(40)} />
          <Button title="Save Profile" onPress={update} />
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
